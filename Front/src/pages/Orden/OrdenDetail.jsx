import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Box, Container, Grid, ListItem, ListItemText, Typography } from '@mui/material';
import Footer from '../../components/footer/footer';
import NavBar from '../../components/navbar/navBar';
import { useParams } from "react-router-dom";
 
const OrdenesDetail = ( ) => {
    const [ordenes, setOrdenes] = useState([]);
    const userData = JSON.parse(sessionStorage.getItem('userData'));
    const userId = userData?.user?.id;
    const { preferenceId } = useParams();

  useEffect(() => {
    // Si no hay ID de usuario, detener la solicitud
    if (!userId) {
      return;
    }

    console.log(userId)

    // Realizar la solicitud GET a las órdenes del usuario con el ID de usuario como parte de la URL
    axios.get(`http://localhost:4000/rifas/ordenesAgregadas/${preferenceId}`)
      .then(response => {
        setOrdenes(response.data);
      })
      .catch(error => {
        console.log('Error en la solicitud GET a las órdenes:', error);
      });
  }, [preferenceId]);




  const calcularTotalCompra = (cart) => {
    return cart.reduce((total, el) => total + el.numbersPrice, 0);
  };
  console.log(ordenes)

  return (
    <>
    <NavBar />
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
      }}>
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
              background: "#D9D9D9",
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
              Órdenes  
            </Typography>

             
            {ordenes.length === 0 ? (
              <Typography variant="body1">No se encontraron órdenes para el usuario.</Typography>
            ) : (
              <ul>

                 
              <Box sx={{ marginBottom: "100px" }}>

                {/* <Grid
item
margin='1.5em'

key={orden.id}>
<Link
 style={{ textDecoration: 'none' }}
 to={`/orden/${orden.id}`}>
 <Orden orden={orden} />
</Link>
</Grid>
))} */}

                <Box
                  sx={{
                     width: "max-width",
                    // height: "282px",

                    background: "#1E1E1E8A",
                    backgroundPosition: "center",
                   
                    borderRadius: 2,
                    padding: "1rem",
                    textAlign: "center",
                     
                  }}
                >    
            <Typography
              variant="h5"
              sx={{ display: "flex", justifyContent: "center", }}
              fontFamily={'TanPearl'} fontSize={"2rem"} my={3}
            >
              Detalle de la orden  
            </Typography>
            </Box>  
                   
                      {/* Mostrar información relevante de la orden */}

                      <Typography variant="h4">
                        
                              <Box
                  sx={{
                    // width: "230px",
                    // height: "282px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.5rem",
                    background: "#D9D9D9",
                    backgroundSize: "contain",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    borderRadius: 2,
                    padding: "2rem",
                    textAlign: "left",
                    transition: "0.3s",
                    "&:hover": {
                      boxShadow: " 0px 5px 61px 6px #D9D9D9",
                    },
                  }}>  
                   <Typography variant="h7" sx={{ color: 'black', fontWeight: 'bold' }}  >
                    Fecha: {ordenes.createdAt.slice(0, 10)}
                  </Typography>
                       <Typography variant="h7" sx={{ color: 'black', fontWeight: 'bold' }}>   Orden ID: {ordenes.id}</Typography>  
                          <Typography variant="h7" sx={{ color: 'black', fontWeight: 'bold' }}>  Estado: {ordenes.estado} </Typography>
                          {/* <li> email:{orden.cart[0].email}</li> */}
                          <Typography variant="h7" sx={{ color: 'black', fontWeight: 'bold' }}> Comprador:{ordenes.cart[0].username}</Typography>
                        </Box>
                      </Typography>

                      {/* <Grid container spacing={0} display="flex" >
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
                          <Typography variant="h4">Numeros</Typography>
                        </Grid>

                        <Grid
                          item
                          xs={12}
                          sm={2.5}
                          display="flex"
                          justifyContent="center"
                          alignItems="center"
                        >
                          <Typography variant="h4">Producto</Typography>
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
                          <Typography variant="h4">Precio</Typography>
                        </Grid>

                      </Grid> */}
                      {ordenes?.cart?.map((el) => {
                        return (
                          <>

                            <>

                              {/* <Grid container
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
                                <Grid
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
                                   
                                </Grid> <Grid
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
                                     {el.productName}
                                  </Typography> 
                                    
                                  </Grid>
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
                                  ${el.numbersPrice}
                                  </Typography> 
                                    
                                  </Grid>
                                

                                

                              </Grid>   */}












               <ListItem>
                <Box
                  sx={{
                    // width: "230px",
                    // height: "282px",

                    background: "#1E1E1E8A",
                    backgroundSize: "contain",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    borderRadius: 2,
                    padding: "1rem",
                    textAlign: "center",
                    transition: "0.3s",
                    "&:hover": {
                      boxShadow: " 0px 5px 61px 6px #D9D9D9",
                    },
                  }}
                >
                  <Typography
                    variant="body1"
                    fontSize="13px"
                    // key={el.id}
                    textOverflow="ellipsis"
                    style={{
                      color: "#FFFFFF",
                      fontWeight: "600",
                    }}
                  >
                    {el.productName}
                  </Typography>
                  <img
                    src={el.imgProduct}
                    alt={el.product}
                    style={{
                      width: "172px",
                      height: "190px",
                      marginBottom: "1rem",
                      borderRadius: 10,
                      borderColor: "#423E3F  ",
                      borderStyle: "solid",
                      borderWidth: "6px",
                    }}
                  />
                  <Typography
                    sx={{
                      fontSize: "13px",
                      fontWeight: "600",
                      color: "#FFFFFF",
                    }}
                  >
                    $ {el.numbersPrice}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    width: "50rem",
                    height: "282px",
                    background: "#1E1E1E",
                    backgroundSize: "contain",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    borderRadius: 2,
                    margin: "1rem",
                    display: "flex",
                    flexDirection: "row",
                    paddingRight: "0.7rem", // Añade un poco de espacio en la parte inferior
                    paddingTop: "1.1rem", // Añade un poco de espacio en la parte inferior

                  }}
                >


                    <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "flex-start",
                      alignItems: "center",
                      paddingTop: "1px",
                      paddingBottom: "1rem", // Añade un poco de espacio en la parte inferior
                      maxHeight: "282", // Establece una altura máxima para la caja
                      // overflowY: "auto", // Habilita el desplazamiento vertical si el contenido excede la altura máxima
                      paddingRight: "0.1rem", // Añade un poco de espacio en la parte derecha
                      // Añade un poco de espacio en la parte superior
                      // Añade un poco de espacio en la parte inferior
                    }}
                  >
                    <Typography
                      variant="body1"
                      // paddingTop="10px"
                      paddingLeft={5}

                      style={{ color: "#FFFFFF", fontWeight: "bold" }}
                    >
                      Números Seleccionados:
                    </Typography>
                    <Typography
                      variant="body1"
                      // paddingTop="10px"
                      paddingLeft={5}
                         fontSize="20px"
                      style={{ color: "#FFFFFF", fontWeight: "bold" }}
                    >
                     {el.number}
                    </Typography>
                  <Box
                      sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                       {/* {el.number.map((numbe) => (
                        
                        <Button
                          //  key={number}
                          sx={{
                            backgroundColor: "#423E3F",
                            borderRadius: "50%",
                            fontSize: "2rem",
                            width: "4rem",
                            height: "4rem",
                            display: "flex",
                            margin: "0.5rem",
                            color: "#D9D9D9",
                            "&:hover": {
                              backgroundColor: "#423E3F",
                            },
                          }}
                        >
                          {number}
                        </Button>
                      ))}  */}
                    </Box>  
                   
                  </Box>  
   

                   
                    <ListItemText

                    primary={
                      <Typography
                        variant="h5"
                        style={{
                          color: "#FFFFFF",
                          textAlign: "right",
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "flex-end",
                          paddingTop: "235px",
                          paddingRight: "1rem",
                          fontWeight: "bold",
                        }}

                      >
                        <Box
                        >
                          Subtotal: ${
                          // e.numbers.length * 
                          el.numbersPrice}
                        </Box>
                      </Typography>
                    }
                    style={{ textAlign: "right" }}
                  />   
                  {/* <IconButton
                    onClick={() => handleDeleteCart(item.rifaId)}
                    edge="end"
                    padding="1rem"

                    aria-label="delete"
                  >
                    <DeleteIcon />
                  </IconButton>{" "} */}
                {/* </Box> */} 
                </Box>
              </ListItem>











                            </>
                          </>
                        )
                      })}
                     
                      <Typography variant="h5" sx={{ textAlign: 'right', paddingRight: '3.5rem', paddingBottom: "2rem", fontWeight: "bold" }}>
                        Total: ${calcularTotalCompra(ordenes.cart).toFixed(2)}
                      </Typography>
                     
                    <hr />
                  </Box>
                 

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

export default OrdenesDetail;

