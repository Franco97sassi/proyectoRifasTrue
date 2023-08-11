
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



import { Box, Button, Divider, Grid, Input, TextField, Typography } from '@mui/material';
import Footer from '../../components/footer/footer';
import NavBar from '../../components/navbar/navBar';
import { useEffect, useState } from 'react';
import axios from 'axios';
import CurrentRifasAdmin from '../../components/currentRifasAdmin/CurrentRifasAdmin.jsx';
import AllOrdenes from '../Orden/AllOrden';

const host = import.meta.env.VITE_SV_HOST;

const Agregar = () => {
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
      <Box
     margin='2rem'
     boxShadow='12px 12px 12px -5px rgba(0,0,0,0.75)'
     borderRadius='0.5rem'
     padding='3em'
     display='flex'
     flexDirection="row"
      gap="2em"
      // flexDirection='row'
     sx={{
      bgcolor: '#FFFFFF',
     }}>
      
     <Box
      display='flex'
      gap="2em"
       
      flexDirection="column"> 
       <Typography
       variant='h1'        fontWeight="700"

        style={{ color: '#333333', textAlign: 'center' }}>
       Agregar Productos  
      </Typography>
       
      
      <Box
   sx={{
    width: '230px',
    height: '282px',
    background:"#D9D9D9",
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    borderRadius: 6,
    marginTop:'4em',

    padding: '1rem',
    textAlign: 'center',
    transition: '0.3s',
    '&:hover': {
     boxShadow: ' 0px 5px 61px 6px #FFA840',
    },
   }}>
    

    
   <Typography
    variant='body1' // HACER RESPONSIVE CARD
    fontSize='1epx'
    textOverflow='ellipsis'
    style={{ color: '#423E3F', 
    fontWeight:"600"    // backgroundColor: 'rgba(0, 0, 0, 0.5)' 
    }}>
    {/* {rifaDetail.product} */}{product.product}
   </Typography>
 
   <img
    // src={rifaDetail.imgProduct}
    // alt={rifaDetail.product}
    style={{
     width: '172px',
     height: '178px',
     
     marginBottom: '1rem',
      borderRadius: 10,
    

    }}
   />
        <Typography sx={{fontSize:"13px", fontWeight:"600", color:"#423E3F"}}
        >
          {/* $ {rifaDetail.numbersPrice} */}{product.numbersPrice}
        </Typography>  

  </Box>
      
          <Box
       

       sx={{
 display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-evenly',
  alignItems: 'center',
  
         border: '0.2em solid #213911d2',
        borderRadius: '20px',
        bgcolor: '#D9D9D9',
         height: "70px",
         width:"224px",
       
        }}>
    
       <Typography
         variant='h6'
         
          style={{ color: '#333333', textAlign: 'center',fontWeight:"700",fontSize:"20px" }}>
         Valor por número
        </Typography>
       <Typography
        variant='h6'
         
        style={{ color: '#333333', textAlign: 'center',fontWeight:"700",fontSize:"15px"  }}>
        {/* ${rifaDetail.numbersPrice} */}{product.numbersPrice}
       </Typography>
        </Box> </Box>
     
       
      
      {/* <Typography
       variant='h1'
       marginTop='0em'
       textAlign='left'
       fontWeight="700"
       style={{ color: '#333333'  }}>
       Números Disponibles
      </Typography> */}
       
      
      <div>
        <Box sx={{ display:"flex"  ,
     flexDirection: 'column',  alignItems:"center" ,  justifyContent:"center"  
     
      }} >
        <h1>Cargar Productos</h1>



        
        <Grid container   display="flex" 
                      paddingLeft="10rem"
                      alignItems="center"
                      
                         >
 {/* <Box sx={{display:"flex",flexDirection:"column", justifyContent:"spaceBetween"}}>  
<Typography>  Producto: </Typography>
<Typography> Imagen URL:</Typography>
<Typography>   Descripcion: </Typography> 
<Typography>  Numeros: </Typography> 


</Box>    */}
<Grid container spacing={2}>

{/* <Box sx={{display:"flex",flexDirection:"column"}}>   */}
<Grid item xs={12}>
    <Typography variant="body1">Producto:</Typography>
          <TextField required  
            name="name"
            value={product.name}
            onChange={(e) => setProduct(e.target.value)}
            sx={{ width: 500,marginLeft:"25px" ,  marginTop: "25px" }}
          /> 
         </Grid>   <Grid item xs={12}>
         <Typography variant="body1">Imagen URL:</Typography>
           <TextField required
            name="name"
            value={product.name}
            onChange={(e) => setImgProduct(e.target.value)}
            sx={{ width: 500,marginLeft:"25px" ,  marginTop: "25px" }}
          /> </Grid> 
      <Grid item xs={12}>    <Typography variant="body1">Descripcion:</Typography>
           <TextField required
            name="name"
            value={product.name}
            onChange={(e) => setDescription(e.target.value)}
            sx={{ width: 500,marginLeft:"25px" ,  marginTop: "25px"  }}
          /> </Grid>
     
        {/* Numbers Price:
        <Grid item xs={12}>
          <TextField required
            name="name"
            value={product.name}
            onChange={(e) => setNumbersPrice(e.target.value)}
            sx={{ width: 500 }}
          />
        </Grid> */}
        <Grid item xs={12}>
    <Typography variant="body1">Precio:</Typography>
           <TextField required
            name="name"
            value={product.name}
            onChange={(e) => setNumbersPrice(e.target.value)}            sx={{ width: 500 ,marginBottom:"20px",marginLeft:"25px" , marginTop: "25px"  }}
          />    </Grid>
            <Grid item xs={12}>
    <Typography variant="body1">Numeros:</Typography>
           <TextField required
            name="name"
            value={product.name}
            onChange={(e) => setTotalNumbers(e.target.value)}
            sx={{ width: 500 ,marginBottom:"20px",marginLeft:"25px" , marginTop: "25px"  }}
          />    </Grid></Grid>
          
        </Grid> <Button  sx={{ marginLeft:"300px" }}
      type="submit" onClick={onSubmit} variant="contained" color="primary" >Crear Producto</Button>
         </Box>
     </div> 
      </Box> 














 
       








      {/* <div>
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
         </Box>
     </div> */}
      
      




       {/* <Grid    > 
               {/* <Input type="text" onChange={(e) => setNumbersPrice(e.target.value)} /> */}
        {/* <Input type="text" onChange={(e) => setTotalNumbers(e.target.value)} /> */}

      
 
              
              
             
             {/* </Grid>
            <CurrentRifasAdmin />      */}
            {/* <h2>Lista de Rifas</h2> */}
             
{/* <AllOrdenes/> */}

            
             
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

export default Agregar; 