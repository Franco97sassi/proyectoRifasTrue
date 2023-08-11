
// import { TextField } from '@mui/material';
// import Footer from '../../components/footer/footer';
// import NavBar from '../../components/navbar/navBar';
// import { useState } from 'react';
// import axios from 'axios';
// const   VITE_SV_HOST   = import.meta.env.VITE_SV_HOST;  
// const Admin = () => {
//     const [svHost, setSvHost] = useState('');
//     const [product, setProduct] = useState('');
//     const [imgProduct, setImgProduct] = useState('');
//     const [description, setDescription] = useState('');
//     const [numbersPrice, setNumbersPrice] = useState('');
//     const [totalNumbers, setTotalNumbers] = useState('');


//     const onSubmit = async ()  => {


//         const data={
//             product: product,
//             imgProduct: imgProduct,
//             description: description,
//             numbersPrice: numbersPrice,
//             totalNumbers: totalNumbers,

//         }
//     try{
//         const res = await axios.post(`${VITE_SV_HOST}/createRifa`, data)
//         console.log(res)

//      }
//      catch(error){
//         console.error(error)

//     }

//     }


//  return (
//   <>
//    <NavBar />

//    <div>
//         Product: <input type="text" onChange={(e) => setProduct(e.target.value)} />
//         Img Product: <input type="text" onChange={(e) => setImgProduct(e.target.value)} />
//         Description: <input type="text" onChange={(e) => setDescription(e.target.value)} />
//         Numbers Price: <input type="text" onChange={(e) => setNumbersPrice(e.target.value)} />
//         Total Numbers: <input type="text" onChange={(e) => setTotalNumbers(e.target.value)} />
//       </div>
//     <button onClick={onSubmit}> Crear Producto</button> 


//    <Footer />
//    </>
//  );
// };



// export default Admin;



import { Box, Button, Divider, Grid, Input, TextField } from '@mui/material';
import Footer from '../../components/footer/footer';
import NavBar from '../../components/navbar/navBar';
import { useEffect, useState } from 'react';
import axios from 'axios';
import CurrentRifasAdmin from '../../components/currentRifasAdmin/CurrentRifasAdmin.jsx';
import AllOrdenes from '../Orden/AllOrden';

const host = import.meta.env.VITE_SV_HOST;

const Admin = () => {
  const [product, setProduct] = useState('');
  const [imgProduct, setImgProduct] = useState('');
  const [description, setDescription] = useState('');
  const [numbersPrice, setNumbersPrice] = useState('');
  const [totalNumbers, setTotalNumbers] = useState('');



  const onSubmit = async () => {
    if (!product || !imgProduct || !description || !numbersPrice || !totalNumbers) {
      console.error('Todos los campos deben completarse');
      return;
    }

    const data = {
      product: product,
      imgProduct: imgProduct,
      description: description,
      numbersPrice: numbersPrice,
      totalNumbers: totalNumbers,
    };

    console.log(data)
    try {
      const res = await axios.post(`${host}/rifas/createRifa`, data);
      console.log(res);
    } catch (error) {
      console.error(error);
    }
  };
  const [otherRifas, setOtherRifas] = useState([]);
  const loadOtherRifas = async () => {
    try {
      const res = await axios.get(`${host}/rifas/otherRifas`);
      setOtherRifas(res.data); // Actualiza el estado con las rifas de otros usuarios
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    loadOtherRifas();
  }, []);
  return (
    <>

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
       <Grid    > 
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
             </Grid>
            <CurrentRifasAdmin />   
            {/* <h2>Lista de Rifas</h2> */}
             
<AllOrdenes/>

            
             
{/* <ul> */}
  {/* {otherRifas.map((rifa) => ( */}
    {/* // <li key={rifa.id}>
    //   <div>Nombre del Producto: {rifa.product}</div>
    //   <div>Descripción: {rifa.description}</div> */}
      {/* Mostrar más información si es necesario */}
    {/* </li>
  ))}
</ul> */}

    </>
  );
};

export default Admin; 