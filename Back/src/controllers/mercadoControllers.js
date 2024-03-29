const mercadopago = require('mercadopago');
const axios = require("axios")
 const { Orden, User } = require('../db')
const { v4: uuidv4 } = require('uuid');
const cron = require('node-cron');
const { Op } = require('sequelize');

const {
  NOTIFICATION_MERCADOPAGO_FRONT,
  NOTIFICATION_MERCADOPAGO_BACK,ACCESS_TOKEN_MP,CLIENT_PORT,SERVER_PORT
} = process.env;


  const postPagar = async (req, res) => {
    
    mercadopago.configure({
    access_token: ACCESS_TOKEN_MP,
    // sandbox:true
});

    const preferenceId = uuidv4();

    try {
      const { cart } = req.body;
      
      
      if (!cart || !Array.isArray(cart) || cart.length === 0) {
        return res.status(400).send({ msg: 'No se proporcionaron productos válidos' });
      }

      
      const items = cart.map((producto) => ({
        title: `${producto.productName} - ${producto.number}`,
        quantity: 1,
        currency_id: 'ARS',
        unit_price: producto.numbersPrice
        ,
      }));
      
      const preference = {
        items: items,

        back_urls: {
            success: `${NOTIFICATION_MERCADOPAGO_FRONT}ordenes`,
          // success: `http://localhost:5173/ordenes`,
            pending: `${NOTIFICATION_MERCADOPAGO_FRONT}success?preferenceId=${preferenceId}`,
          // pending: `http://localhost:5173/success?preferenceId=${preferenceId}`,
          // failure: `http://localhost:5173/success?preferenceId=${preferenceId}`,
            // failure: `${NOTIFICATION_MERCADOPAGO_FRONT}success?preferenceId=${preferenceId}`,
                        // pending: `${NOTIFICATION_MERCADOPAGO_FRONT}success?preferenceId=${preferenceId}`,
 
            failure: `${NOTIFICATION_MERCADOPAGO_FRONT}home`,

          },
          notification_url: `${NOTIFICATION_MERCADOPAGO_BACK}rifas/webhook?preferenceId=${preferenceId}`,
        //  notification_url: `https://0723-186-136-152-49.ngrok-free.app/rifas/webhook?preferenceId=${preferenceId}`,
 
      };


  
      // Crear la preferencia en MercadoPago
      const response = await mercadopago.preferences.create(preference);
      // console.log(response, "soy response")
  
      
      
  
      // Guardar la orden en la base de datos
      const orden = await Orden.create({
        preferenceId,
        cart,
        userId:cart[0].userId,
      });
  
      // Redirigir al usuario al checkout de MercadoPago
      res.send({ response });
    } catch (error) {
      console.error('Error al procesar el pago:', error);
      res.status(500).send('Error al procesar el pago');
    }
  };

 
  const getMercado = async (req, res) => {
    try {
      const payment = req.query;
  
      // console.log(req.query);
      if (payment.type === "payment") {
        const data = await mercadopago.payment.findById(payment['data.id']);
        const preferenceId = payment.preferenceId;
  
        const orden = await Orden.findOne({ where: { preferenceId: preferenceId } });
        if (orden && data.body.status === 'approved') {
          orden.estado = 'PAGADO CON ÉXITO';
          orden.idCompra = payment['data.id']; // numero de id compra q nos da mercadopago
  
          await orden.save();
  
          const user = await User.findOne({ where: { id: orden.userId } });
  
          // Iterar sobre el array orden.cart y hacer una solicitud PUT por cada elemento
          for (const item of orden.cart) {
            const { rifaId, number, userId } = item;
  
            // Llamar a la ruta PUT buyRifa con los datos necesarios
            try {
              const response = await axios.put(`${SERVER_PORT}/rifas/buyRifa`, {
                rifaId,
                number,
                userId,
              });
              const buyRifaResult = response.data;
              // Procesar buyRifaResult si es necesario
            } catch (error) {
              console.log('Error en la solicitud PUT a buyRifa:', error.message);
            }
          }
        }
      }
  
      res.send("webhook");
  
    } catch (error) {
      console.log(error);
    }
  };

 
  const Ordenes = async (req, res) => {
    try {
      const { userId } = req.params; // Obtener el ID de usuario desde los parámetros de URL
      
      const ordenes = await Orden.findAll({ where: { userId: userId } });
  
      if (!ordenes || ordenes.length === 0) {
        return res.status(404).json({ message: 'No se encontraron órdenes para el usuario proporcionado.' });
      }
  
      res.json(ordenes);
    } catch (error) {
      res.status(500).json({ message: 'Error en el servidor.', error: error.message });
    }
  };

  const allOrdenes = async (req, res) => {
    try {
        
      const ordenes = await Orden.findAll();
   
      res.json(ordenes);
    } catch (error) {
      res.status(500).json({ message: 'Error en el servidor.', error: error.message });
    }
  };
  
  const eliminarOrdenesNoPagadas = async () => {
    try {
      const doceHorasAtras  = new Date(Date.now() - 12 * 60 * 60 * 1000); // Hace un minuto
      const ordenesNoPagadas = await Orden.findAll({
        where: {
          estado: 'NO PAGADO', // Cambia esto según tu modelo
          createdAt: {
            [Op.lte]: doceHorasAtras ,
          },
        },
      });
  
      // Elimina las órdenes no pagadas
      for (const orden of ordenesNoPagadas) {
        await orden.destroy();
      }
    } catch (error) {
      console.error('Error al eliminar órdenes no pagadas:', error);
    }
  };
  
  // Programa la tarea para que se ejecute cada minuto
  cron.schedule('* * * * *', () => {
    eliminarOrdenesNoPagadas();
  }, {
    scheduled: true,
    timezone: 'UTC', // Cambia esto a tu zona horaria si es diferente
  });
  
  // Inicia la tarea programada
    
  // const express = require('express');
  // const { sequelize } = require('./models'); // Asegúrate de importar tu instancia de Sequelize
  // const eliminarOrdenesNoPagadas = require('./eliminarOrdenesNoPagadas'); // Importa la tarea programada
  
  // Resto de tu código de configuración de Express y rutas
  
  // Sincroniza la base de datos y comienza tu aplicación
 
 

  const ordenesId = async (req, res) => {

    try {
      const preferenceId = req.params.preferenceId; 
      const orden = await Orden.findOne({ where: { preferenceId: preferenceId } });

      if (!orden) {
        return res.status(404).json({ error: 'Órden no encontrada' });
      }

      return res.json(orden);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: 'Error interno del servidor' });
    }
  };


  module.exports = {
     postPagar , getMercado, Ordenes,allOrdenes,ordenesId}; 