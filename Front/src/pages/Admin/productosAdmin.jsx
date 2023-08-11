import React from 'react'
import { Box, Button, Divider, Grid, Input, TextField } from '@mui/material';
import Footer from '../../components/footer/footer';
import NavBar from '../../components/navbar/navBar';
import { useEffect, useState } from 'react';
import axios from 'axios';
import CurrentRifasAdmin from '../../components/currentRifasAdmin/CurrentRifasAdmin.jsx';
import AllOrdenes from '../Orden/AllOrden';
const productosAdmin = () => {
  return (
    <>

<Box sx={{
              display:"flex", justifyContent:"center"
              }}> ,
 
             <h2  >Lista de Productos</h2></Box>
              
             <Box sx={{
              display:"flex", justifyContent:"flex-end"
              }}> ,

            
             <Button
            variant="contained"
            sx={{
              
              

              width: "10rem",
              height: "44px",
              fontSize: "1.05rem",
              borderRadius: "40px",
              color: "#423E3F",
              fontWeight: "700",
              marginRight: "5rem",
            backgroundColor: "#D68E30",
              "&:hover": {
                backgroundColor: "#630014",
              },
            }}
            // onClick={() => {
            //   // Realizar acción de compra
            //   handleBuyClick();
            // }}
          >
            Agregar
          </Button>
          </Box>
              
            <CurrentRifasAdmin />   
             
    </>
  )
}

export default productosAdmin