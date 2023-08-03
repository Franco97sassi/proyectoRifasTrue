import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Typography } from '@mui/material';

const OrdenesComponent = () => {
    const [ordenes, setOrdenes] = useState([]);
    const userData = JSON.parse(sessionStorage.getItem('userData'));
    const userId = userData?.user?.id;

  useEffect(() => {
    // Si no hay ID de usuario, detener la solicitud
    if (!userId) {
      return;
    }

    console.log(userId)

    // Realizar la solicitud GET a las órdenes del usuario con el ID de usuario como parte de la URL
    axios.get(`http://localhost:4000/rifas/ordenes/${userId}`)
      .then(response => {
        setOrdenes(response.data);
      })
      .catch(error => {
        console.log('Error en la solicitud GET a las órdenes:', error);
      });
  }, [userId]);

  console.log(ordenes)

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Órdenes del usuario
      </Typography>
      {ordenes.length === 0 ? (
        <Typography variant="body1">No se encontraron órdenes para el usuario.</Typography>
      ) : (
        <ul>
          {ordenes.map(orden => (
            <li key={orden.id}>
              {/* Mostrar información relevante de la orden */}
              <Typography variant="body1">
                Orden ID: {orden.id}, Estado: {orden.estado}
              </Typography>
              {orden?.cart?.map((el)=>{
                return(
                    <>
                    <Typography>
                       Numero: {el.number}
                    </Typography>
                    <Typography>
                       Precio: ${el.numbersPrice}
                    </Typography>
                    </>
                )
              })}
            </li>
          ))}
        </ul>
      )}
    </Container>
  );
};

export default OrdenesComponent;

