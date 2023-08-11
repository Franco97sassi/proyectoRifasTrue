import React from 'react'
import { Box, Button, Divider, Grid, Input, TextField } from '@mui/material';
import Footer from '../../components/footer/footer';
import NavBar from '../../components/navbar/navBar';
import { useEffect, useState } from 'react';
import axios from 'axios';
import CurrentRifasAdmin from '../../components/currentRifasAdmin/CurrentRifasAdmin.jsx';
import AllOrdenes from '../Orden/AllOrden';
const a = () => {
  return (
    <div>
 <NavBar />

<div>
  <Box sx={{ display:"flex"  ,
flexDirection: 'column',  alignItems:"center" ,  justifyContent:"center"  

}} >
  <h1>Cargar Productos</h1>
  <Grid container   display="flex"
                paddingLeft="10px"
                alignItems="center"     >

  Product:
  <Grid item xs={12}    >
    <TextField required
      name="name"
      value={product.name}
      onChange={(e) => setProduct(e.target.value)}
      sx={{ width: 500 }}
    />
  </Grid>
  Img Product:
  <Grid item xs={12}>
    <TextField required
      name="name"
      value={product.name}
      onChange={(e) => setImgProduct(e.target.value)}
      sx={{ width: 500 }}
    />
  </Grid>
  Description:
  <Grid item xs={12}>
    <TextField required
      name="name"
      value={product.name}
      onChange={(e) => setDescription(e.target.value)}
      sx={{ width: 500 }}
    />
  </Grid>
  Numbers Price:
  <Grid item xs={12}>
    <TextField required
      name="name"
      value={product.name}
      onChange={(e) => setNumbersPrice(e.target.value)}
      sx={{ width: 500 }}
    />
  </Grid>
  {/* <Input type="text" onChange={(e) => setNumbersPrice(e.target.value)} /> */}
  Total Numbers:
  <Grid item xs={12}>
    <TextField required
      name="name"
      value={product.name}
      onChange={(e) => setTotalNumbers(e.target.value)}
      sx={{ width: 500 ,marginBottom:"20px" }}
    />
  </Grid>
  </Grid>
  {/* <Input type="text" onChange={(e) => setTotalNumbers(e.target.value)} /> */}
  </Box>
</div>


<Button  sx={{ marginLeft:"20px" }}
type="submit" onClick={onSubmit} variant="contained" color="primary" >Crear Producto</Button>
    </div>
  )
}

export default a