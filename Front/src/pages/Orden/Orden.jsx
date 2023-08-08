import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Box, Container, Grid, Typography } from '@mui/material';
import Footer from '../../components/footer/footer';
import NavBar from '../../components/navbar/navBar';
 
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
  const calcularTotalCompra = (cart) => {
    return cart.reduce((total, el) => total + el.numbersPrice, 0);
  };
  console.log(ordenes)

  return (
    <> 
    <Box
    sx={{
     height: '100vh',
     display: 'flex',
     flexDirection: 'column',
    }}>  
       <NavBar  />
    <Container>
    <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "28px",
          marginTop: "28px",
        }}
      >
        <div
          style={{
            background:  "white",
            width: "80%",
            padding: "20px",
            borderRadius: "5px",
          }}
        >
       
      <Typography
            variant="h5"
            sx={{ display: "flex", justifyContent: "center", }}
            fontFamily={'TanPearl'} fontSize={"2rem"} my={3}
          >
        Órdenes del usuario
          </Typography>
          <hr />
      {ordenes.length === 0 ? (
        <Typography variant="body1">No se encontraron órdenes para el usuario.</Typography>
      ) : (
        <ul>
          
          {ordenes.map(orden => (
 <Box sx={{marginBottom:"100px"}}> 
            <li key={orden.id}>
              {/* Mostrar información relevante de la orden */}
              <Typography variant="h4" sx={{paddingBottom:"1rem"}}>
                Orden ID: {orden.id}, Estado: {orden.estado}
              </Typography>
              <Grid container spacing={0} display="flex" >
                    <Grid
                      item
                       xs={12}
                       sm={3}
                      // container
                      display="flex"
                      justifyContent="center"
                      alignItems="center"  
                    >
                      <Typography variant="h4">Producto</Typography>
                    </Grid>
                  
                    <Grid
                      item
                        xs={12}
                       sm={3}
                      // container
                      display="flex"
                      justifyContent="center"
                      alignItems="center"  
                    >
                      <Typography variant="h4">Numero</Typography>
                    </Grid>

                    <Grid
                      item
                       xs={12}
                       sm={2.5}
                      display="flex"
                      justifyContent="center"
                      alignItems="center" 
                    >
                      <Typography variant="h4">Precio</Typography>
                    </Grid>
                   
                    <Grid
                      item
                       xs={12}
                       sm={3.5}
                      // container
                      display="flex"
                      justifyContent="center"
                      alignItems="center" 
                    >
                      <Typography variant="h4">Imagen</Typography>
                    </Grid>
                   
                  </Grid>
              {orden?.cart?.map((el)=>{
                return(
                    <>
                  
                    <>
                   
                  <hr />
                  <Grid container 
                  // spacing={3}
                   display="flex" justifyContent="space-between">
                    <Grid
                      item
                      xs={12}
                      sm={3}
                      container
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                    > 
                  <Typography  variant="body1">
                       Producto: {el.productName}
                    </Typography></Grid> <Grid
                      item
                      xs={12}
                      sm={3}
                      container
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                      
                    > 
                    <Typography variant="body1">
                       Numero: {el.number}
                    </Typography></Grid>
                    <Grid
                      item
                      xs={12}
                      sm={3}
                      container
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                    > 
                    <Typography variant="body1">
                       Precio: ${el.numbersPrice}
                    </Typography> </Grid><Grid
                      item
                      xs={12}
                      sm={3}
                      container
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                    > 
                    <div>
                       <img
                      src={el.imgProduct}
                       style={{
                        width: "100px",
                        height: "100px",
                        marginBottom: "1rem",
                        borderRadius: 10,
                       }}
                    />
                    </div></Grid>
                    <hr/> 
                    
                     
                   
                    </Grid> 
                </>
                    </>
                )
              }) }
              <hr />
              <Typography variant="h5" sx={{ textAlign: 'right', paddingRight: '1rem',  paddingBottom:"2rem" ,fontWeight:"bold" }}>
                        Total de la Orden: ${calcularTotalCompra(orden.cart).toFixed(2)}
                      </Typography>
            </li>
            </Box>
          )) }
           
        </ul>
      )}
      </div>
      </div>
    </Container>
    <Footer />
        </Box>  
    </>
  );
};

export default OrdenesComponent;

