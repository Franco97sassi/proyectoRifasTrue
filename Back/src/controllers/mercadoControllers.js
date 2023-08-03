 const mercadopago = require('mercadopago');
const axios = require("axios")
// const { User } = require('../../db')
const { v4: uuidv4 } = require('uuid');

const {
  NOTIFICATION_MERCADOPAGO_FRONT,
  NOTIFICATION_MERCADOPAGO_BACK
} = process.env;


  const postPagar = async (req, res) => {
    
    mercadopago.configure({
    access_token: "TEST-8021216670138113-070920-8fec9d16d8b40375f92b98e1eb06b24d-235741436"
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
          success: `${NOTIFICATION_MERCADOPAGO_FRONT}/success?preferenceId=${preferenceId}`,
          pending: `${NOTIFICATION_MERCADOPAGO_FRONT}/success?preferenceId=${preferenceId}`,
          failure: `${NOTIFICATION_MERCADOPAGO_FRONT}/success?preferenceId=${preferenceId}`,
        },
        notification_url: `https://drive.google.com/drive/folders/1iMiYS-2z1XPS5p8PRWjsry2AdKvmA9sY`,
      };




    //   const preference = {
    //     items: items,

    //     back_urls: {
    //       success: `${NOTIFICATION_MERCADOPAGO_FRONT}/success?preferenceId=${preferenceId}`,
    //       pending: `${NOTIFICATION_MERCADOPAGO_FRONT}/success?preferenceId=${preferenceId}`,
    //       failure: `${NOTIFICATION_MERCADOPAGO_FRONT}/success?preferenceId=${preferenceId}`,
    //     },
    //     notification_url: `${NOTIFICATION_MERCADOPAGO_BACK}/pagos/webhook?preferenceId=${preferenceId}`,
    //   };






  
      // Crear la preferencia en MercadoPago
      const response = await mercadopago.preferences.create(preference);
      console.log(response, "soy response")
  
      
      
  
      // Guardar la orden en la base de datos
    //   const orden = await Orden.create({
    //     preferenceId,
    //     senderName,
    //     receiverName,
    //     deliveryType,
    //     address,
    //     cellphone,
    //     pickupTime,
    //     cart,
    //     userId:userId,
    //     username:username,
        
    //     // Otros campos de la orden
    //   });
  
      // Redirigir al usuario al checkout de MercadoPago
      res.send({ response });
    } catch (error) {
      console.error('Error al procesar el pago:', error);
      res.status(500).send('Error al procesar el pago');
    }
  };


  module.exports = {
     postPagar};