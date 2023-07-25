// import React, { useEffect } from 'react';
// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { Box, Typography, Button, Grid, useMediaQuery } from '@mui/material';
// import "./stylesRifaDetailCard.css"
//  import TextField from '@mui/material/TextField';
// import Autocomplete from '@mui/material/Autocomplete';
// //-------------------- Actions --------------------------
// import { addNumbersToCart } from '../../store/state/actions/rifas';

// //-------------------- Components --------------------------

// // implementar precio

// ///////////////////////////////
// const RifaDetailCard = ({ rifaDetail }) => {
//  const navigate = useNavigate();
//  const dispatch = useDispatch();
//  console.log(rifaDetail);

//  /* Parte del Responsive del texto */

//  const isSmallScreen = useMediaQuery('(max-width: 1550px)');
//  const isExtraSmallScreen = useMediaQuery('(max-width: 1200px)');

//  let typographyVariant = 'h4';
//  let imgSize = { width: '30rem' };

//  if (isSmallScreen) {
//   typographyVariant = 'h5';
//   imgSize.width = '25rem';
//  } else if (isExtraSmallScreen) {
//   typographyVariant = 'h6';
//   imgSize.width = '20rem';
//  }

//  /* Compra Rifas action */
//  const [selectedNumbers, setSelectedNumbers] = useState([]);
//  //  console.log(selectedNumbers);

//  const handleNumberClick = (number) => {
//   if (selectedNumbers.includes(number)) {
//    setSelectedNumbers(selectedNumbers.filter((num) => num !== number));
//   } else {
//    setSelectedNumbers([...selectedNumbers, number]);
//   }
//  };

//  //  const userDataString = sessionStorage.getItem('userData');
//  //  const userData = userDataString ? JSON.parse(userDataString) : null;

//  const addToCart = () => {
//  let a= localStorage.setItem('selectedNumbers', "hola");
//  console.log(a);
   
//  };

//  // Ordenar los números en función de su valor
//  const sortedNumeros = [...rifaDetail.numeros].sort(
//   (a, b) => a.number - b.number,
//  );

// //  // Guardar en el localStorage al cargar los números seleccionados
// //  useEffect(() => {
// //    localStorage.setItem('selectedNumbers', JSON.stringify(selectedNumbers));
// //  }, [selectedNumbers]);
// const top100Films = [
//   { label: '1', year: 1994 },
//   { label: '2', year: 1972 },
//   { label: '3', year: 1994 },
//   { label: '4', year: 1994 },
//   { label: '5', year: 1994 },
//   { label: '6', year: 1994 },
//   { label: '7', year: 1994 },
//   { label: '8', year: 1994 },
//   { label: '9', year: 1994 },
//   { label: '10', year: 1994 },  ]
//  return (
//   <>
//    {Object.keys(rifaDetail).length > 0 ? (
//     /// TIENE QUE IR CON RESPONSIVE
//     <Box
//      margin='2rem'
//      boxShadow='12px 12px 12px -5px rgba(0,0,0,0.75)'
//      borderRadius='0.5rem'
//      padding='3em'
//      sx={{
//       bgcolor: '#d4d4d4',
//      }}>
//      <Box
//       display='flex'
//       justifyContent='space-between'>
//       <Box
//        maxWidth='60%'
//        maxHeight='21rem'
//        borderRadius='0.5rem'
//        sx={{
//         bgcolor: '#adadad',
//         overflow: 'hidden',
//        }}
//        boxShadow='11px 9px 12px -5px rgba(0,0,0,0.75)'>
//            <Box
//    sx={{
//     width: '300px',
//     height: '400px',
//     background:"#FFA840",
//     backgroundSize: 'contain',
//     backgroundPosition: 'center',
//     backgroundRepeat: 'no-repeat',
//     borderRadius: 2,
    
//     padding: '1rem',
//     textAlign: 'center',
//     transition: '0.3s',
//     '&:hover': {
//      boxShadow: ' 0px 5px 61px 6px #FFA840',
//     },
//    }}>
    

    
//    <Typography
//     variant='body1' // HACER RESPONSIVE CARD
//     fontSize='1.54em'
//     textOverflow='ellipsis'
//     style={{ color: '#c4bdbd', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
//     {rifaDetail.product}
//    </Typography>
 
//    <img
//     src={rifaDetail.imgProduct}
//     alt={rifaDetail.product}
//     style={{
//      width: '100%',
//      height: '240px',
     
//      marginBottom: '1rem',
//      boxShadow: '0px 5px 8px 0px rgba(0,0,0,0.75)',
//      borderRadius: 2,
//     }}
//    />
//         <Typography sx={{fontSize:"18px", fontWeight:"500", color:"black"}}>$ {rifaDetail.numbersPrice}</Typography>  

//   </Box>
    
//        {/* <Typography
//         style={{ color: '#333333' }}
//         variant='h1'
//         margin='20px'
//         textAlign='center'>
//         {rifaDetail.product}
//        </Typography>
//        <Typography
//         style={{ color: '#333333' }}
//         variant={typographyVariant}
//         padding='1em'
//         margin='16px'>
//         {rifaDetail.description}
//        </Typography>
//        <Typography
//         style={{ color: '#333333' }}
//         variant={typographyVariant}
//         padding='1em'
//         margin='16px'>$
//         {rifaDetail.numbersPrice}
//        </Typography> */}
//       </Box>
//       {/* <Box
//        borderRadius='0.5rem'
//        maxWidth='35rem'
//        maxHeight='20rem'
//        boxShadow='11px 9px 12px -5px rgba(0,0,0,0.75),inset 0px 5px 91px -6px'
//        sx={{
//         backgroundColor: '#f83f3f',
//         display: 'flex',
//         alignItems: 'center',
//        }}>
//        <img
//         src={rifaDetail.imgProduct}
//         alt={rifaDetail.product}
//         style={{
//          width: imgSize.width,
//          height: '15rem',
//          objectFit: 'cover',
//          margin: '2rem',
//          boxShadow: '11px 9px 12px -5px rgba(0,0,0,0.75)',
//          borderRadius: '0.5rem',
//         }}
//        />
//       </Box> */}
//      </Box>
//      <Box
//       margin='10em'
//       sx={{
//        border: '0.2em solid #213911d2',
//        borderRadius: '0.5rem',
//        bgcolor: '#58aa2271',
//        boxShadow:
//         '3px 3px 15px 3px rgba(11,61,15,1),  inset 0px 0px 66px 17px rgba(41,125,47,1)',
//       }}>

        
//       <Box>
//        <Typography
//         variant='h2'
//         margin='1em'
//         style={{ color: '#333333', textAlign: 'center' }}>
//         Valor de cada número
//        </Typography>
//        <Typography
//         variant='h2'
//         margin='1em'
//         style={{ color: '#333333', textAlign: 'center' }}>
//         ${rifaDetail.numbersPrice}
//        </Typography>
//       </Box>
//      </Box>

//      <Box>
//       <Typography
//        variant='h1'
//        marginTop='2em'
//        style={{ color: '#333333', textAlign: 'center' }}>
//        Seleccionar Numeros Disponibles
//       </Typography>
      
//       <Typography
//        variant='h4'
//        margin='10px'
//        marginBottom='3rem'
//        style={{ color: '#33333', textAlign: 'center' }}>
       
//        <div className='boxPosition'>  
//        {/* <Box
//       margin='1em'
//       sx={{
//        border: '0.2em solid #213911d2',
//        borderRadius: '0.5rem',
//        bgcolor: '#58aa2271',
//        height: 100,
//         // flex: '1 1 auto',
//         display: 'flex',
//         flexDirection: 'row',
//          justifyContent: 'center',
//           alignItems: 'center',
 

//        boxShadow:
//         '3px 3px 15px 3px rgba(11,61,15,1),  inset 0px 0px 66px 17px rgba(41,125,47,1)',
//       }}> */}
// {/*        
//        <Typography

//         variant='h5'
//         margin='1em'
//         style={{ color: '#333333', textAlign: 'center' }}>
//        Numeros seleccionados
//        <div className='circlesPositions'>  
//        <div> <input  type="number"  />  */}
//         {/* <Autocomplete
//       disablePortal
//       id="combo-box-demo"
//       options={top100Films}
//       sx={{ width: 10 }}
//       renderInput={(params) => <TextField {...params}   />}
//     /> */}
//      {/* </div>
//        <div > <input  type="number"   /> </div>
//        <div > <input  type="number"  />  </div>
//        <div> <input  type="number"  />  </div>
//        <div> <input  type="number"  />  </div>
//        <div> <input  type="number"  />  </div>
//        <div> <input  type="number"  />  </div>
//        <div> <input  type="number"  />  </div>
//        <div> <input  type="number"  />  </div>

//        </div> */}

//        {/* </Typography> */}
//        {/* <Autocomplete
//       disablePortal
//       id="combo-box-demo"
//       options={top100Films}
//       sx={{ width: 10 }}
//       renderInput={(params) => <TextField {...params}   />}
//     /> */}
//      {/* </Box> */}
//      </div>
//       </Typography>
//         <Box
//        maxWidth='100%'
//        sx={{
//         border: '0.2em solid #adadad',
//         borderRadius: '0.5rem',
//         padding: '2em',
//        }}>
//        <Grid
//         container
//         justifyContent='center'
//         spacing={2}>

//         {sortedNumeros.map((element) => (
//          <Grid
//           item
//           key={element.number}>
//           <Button
//            fullWidth
//            sx={{
//             color: selectedNumbers.includes(element) ? '#c4bdbd' : '#333',
//             backgroundColor: selectedNumbers.includes(element)
//              ? '#b60d0dd2'
//              : element.available
//              ? '#b31d1d5c'
//              : '#3336',
//             borderRadius: '50%',
//             fontSize: '1.5rem',
//             width: '4rem',
//             height: '4rem',
//            }}
//            variant={!element.available ? 'outlined' : 'text'}
//            onClick={() => handleNumberClick(element)}
//            disabled={!element.available}>
//            {element.number}
//           </Button>
//          </Grid>
//         ))}
//        </Grid>
//       </Box>  
//       <Box
//        width='100%'
//        sx={{
//         display: 'flex',
//         justifyContent: 'center',
//        }}>
//        <Button
//         variant='contained'
//         sx={{
//          width: '200px',
//          height: '60px',
//          fontSize: '1.05rem',
//          margin: '2em',
//          backgroundColor: '#9e0423',
//          '&:hover': {
//           backgroundColor: '#630014',
//          },
//         }}
//         onClick={() => {
//          // Realizar acción con los números seleccionados
//          addToCart();
//          navigate('/cart');
//         }}>
//         Agregar Al Carrito
//        </Button>
//       </Box>
//      </Box>
//     </Box>
//    ) : (
//     <Typography>Rifa no encontrada</Typography>
//    )}
//   </>
//  );
// };

// // //////////////////////////////

//  export default RifaDetailCard;

import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Typography, Button, Grid, useMediaQuery } from '@mui/material';

//-------------------- Actions --------------------------
import { addNumbersToCart } from '../../store/state/actions/rifas';

//-------------------- Components --------------------------

// implementar precio

///////////////////////////////
const RifaDetailCard = ({ rifaDetail }) => {
 const navigate = useNavigate();
 const dispatch = useDispatch();
 console.log(rifaDetail);

 /* Parte del Responsive del texto */

 const isSmallScreen = useMediaQuery('(max-width: 1550px)');
 const isExtraSmallScreen = useMediaQuery('(max-width: 1200px)');

 let typographyVariant = 'h4';
 let imgSize = { width: '30rem' };

 if (isSmallScreen) {
  typographyVariant = 'h5';
  imgSize.width = '25rem';
 } else if (isExtraSmallScreen) {
  typographyVariant = 'h6';
  imgSize.width = '20rem';
 }

 /* Compra Rifas action */
 const [selectedNumbers, setSelectedNumbers] = useState([]);
 //  console.log(selectedNumbers);

 const handleNumberClick = (number) => {
  if (selectedNumbers.includes(number)) {
   setSelectedNumbers(selectedNumbers.filter((num) => num !== number));
  } else {
   setSelectedNumbers([...selectedNumbers, number]);
  }
 };

 //  const userDataString = sessionStorage.getItem('userData');
 //  const userData = userDataString ? JSON.parse(userDataString) : null;

 const addToCart = (selectedNumbers) => {
  dispatch(
   addNumbersToCart(
    selectedNumbers,
    rifaDetail.id,
    rifaDetail.numbersPrice,
    rifaDetail.product,
    rifaDetail.imgProduct,
   ),
  );
  setSelectedNumbers([]);
 };

 // Ordenar los números en función de su valor
 const sortedNumeros = [...rifaDetail.numeros].sort(
  (a, b) => a.number - b.number,
 );

 return (
  <>
   {Object.keys(rifaDetail).length > 0 ? (
    /// TIENE QUE IR CON RESPONSIVE
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
      bgcolor: '#d4d4d4',
     }}>
      
     <Box
      display='flex'
      gap="2em"

      flexDirection="column"> 
       <Typography
       variant='h1'
        style={{ color: '#333333', textAlign: 'center' }}>
       Finalizar Compra
      </Typography>
       
      {/* <Box
       maxWidth='60%'
       maxHeight='20rem'
       borderRadius='0.5rem'
       sx={{
        bgcolor: '#adadad',
        overflow: 'hidden',
       }}
       boxShadow='11px 9px 12px -5px rgba(0,0,0,0.75)'> */}
       {/* <Typography
        style={{ color: '#333333' }}
        variant='h1'
        margin='20px'
        textAlign='center'>
        {rifaDetail.product}
       </Typography> */}
       {/* <Typography
        style={{ color: '#333333' }}
        variant={typographyVariant}
        padding='1em'
        margin='16px'>
        {rifaDetail.description}
       </Typography> */}
      {/* </Box> */}
{/*       
      <Box
       borderRadius='0.5rem'
       maxWidth='35rem'
       maxHeight='20rem'
       boxShadow='11px 9px 12px -5px rgba(0,0,0,0.75),inset 0px 5px 91px -6px'
       sx={{
        backgroundColor: '#f83f3f',
        display: 'flex',
        alignItems: 'center',
       }}>
        
       <img
        src={rifaDetail.imgProduct}
        alt={rifaDetail.product}
        style={{
         width: imgSize.width,
         height: '15rem',
         objectFit: 'cover',
         margin: '2rem',
         boxShadow: '11px 9px 12px -5px rgba(0,0,0,0.75)',
         borderRadius: '0.5rem',
        }}
       />
      </Box> */}
      <Box
   sx={{
    width: '375px',
    height: '375px',
    background:"#FFA840",
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    borderRadius: 2,
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
    fontSize='1.54em'
    textOverflow='ellipsis'
    style={{ color: 'black', 
    fontWeight:"500"    // backgroundColor: 'rgba(0, 0, 0, 0.5)' 
    }}>
    {rifaDetail.product}
   </Typography>
 
   <img
    src={rifaDetail.imgProduct}
    alt={rifaDetail.product}
    style={{
     width: '250px',
     height: '250px',
     
     marginBottom: '1rem',
     boxShadow: '8px 8px 8px 8px rgba(0.75,0.75,0.75,0.75)',
     borderRadius: 10,
     borderColor: '#000000  ',
        borderStyle: 'solid',
        borderWidth: '10px',

    }}
   />
        <Typography sx={{fontSize:"18px", fontWeight:"500", color:"black"}}>$ {rifaDetail.numbersPrice}</Typography>  

  </Box>
      
          <Box
       

       sx={{
 
         border: '0.2em solid #213911d2',
        borderRadius: '0.5rem',
        bgcolor: '#58aa2271',
         height: "150px",
         width:"375px",
        // height: 300,
        // width: 300,
        boxShadow:
         '3px 3px 15px 3px rgba(11,61,15,1),  inset 0px 0px 66px 17px rgba(41,125,47,1)',
        }}>
     <Box >
       <Typography
         variant='h3'
         margin='1em'
         style={{ color: '#333333', textAlign: 'center' }}>
         Valor por número
        </Typography>
       <Typography
        variant='h2'
        margin='1em'
        
        style={{ color: '#333333', textAlign: 'center' }}>
        ${rifaDetail.numbersPrice}
       </Typography>
       </Box></Box></Box>
     {/* <Box
      margin='10em'
      sx={{
       border: '0.2em solid #213911d2',
       borderRadius: '0.5rem',
       bgcolor: '#58aa2271',
       boxShadow:
        '3px 3px 15px 3px rgba(11,61,15,1),  inset 0px 0px 66px 17px rgba(41,125,47,1)',
      }}>
      <Box>
       <Typography
        variant='h2'
        margin='1em'
        style={{ color: '#333333', textAlign: 'center' }}>
        Valor de cada número
       </Typography>
       <Typography
        variant='h2'
        margin='1em'
        style={{ color: '#333333', textAlign: 'center' }}>
        ${rifaDetail.numbersPrice}
       </Typography>
      </Box>
     </Box> */}
     <Box>
      <Typography
       variant='h1'
       marginTop='0em'
       style={{ color: '#333333', textAlign: 'center' }}>
       Numeros Disponibles
      </Typography>
      <Typography
       variant='h4'
       margin='10px'
       marginBottom='3rem'
       style={{ color: '#33333', textAlign: 'center' }}>
       Selecciona los numeros que desees comprar
      </Typography>
      <Box
       maxHeigth='10%'

       sx={{
        border: '0.2em solid #adadad',
        borderRadius: '0.5rem',
        padding: '2em',
        
       }}>
       <Grid
        container
        justifyContent='center'
        spacing={2}>
        {sortedNumeros.map((element) => (
         <Grid
          item
          key={element.number}>
         <Button
           fullWidth
           sx={{
            color: selectedNumbers.includes(element) ? '#c4bdbd' : '#333',
            backgroundColor: selectedNumbers.includes(element)
             ? '#b60d0dd2'
             : element.available
             ? '#b31d1d5c'
             : '#3336',
            borderRadius: '50%',
            fontSize: '1.5rem',
            width: '4rem',
            height: '4rem',
           }}
           variant={!element.available ? 'outlined' : 'text'}
           onClick={() => handleNumberClick(element)}
           disabled={!element.available}>
           {element.number}
          </Button>
         </Grid>
        ))}
       </Grid>
      </Box>
      <Box
       width='100%'
       sx={{
        display: 'flex',
        justifyContent: 'flex-end',
       }}>
       <Button
        variant='contained'
        sx={{
         width: '250px',
         height: '60px',
         fontSize: '1.05rem',
         margin: '2em',
         backgroundColor: '#9e0423',
         '&:hover': {
          backgroundColor: '#630014',
         },
        }}
        onClick={() => {
         // Realizar acción con los números seleccionados
         addToCart(selectedNumbers);
         navigate('/cart');
        }}>
        Agregar al Carrito
       </Button>
      </Box>
     </Box>
    </Box>
   ) : (
    <Typography>Rifa no encontrada</Typography>
   )}
  </>
 );
};

//////////////////////////////

export default RifaDetailCard;
