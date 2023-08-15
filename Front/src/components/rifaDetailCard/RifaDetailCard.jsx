 
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
      bgcolor: '#FFFFFF',
     }}>
      
     <Box
      display='flex'
      gap="2em"
       
      flexDirection="column"> 
       <Typography
       variant='h1'        fontWeight="700"

        style={{ color: '#333333', textAlign: 'center' }}>
       Finalizar  
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
    {rifaDetail.product}
   </Typography>
 
   <img
    src={rifaDetail.imgProduct}
    alt={rifaDetail.product}
    style={{
     width: '172px',
     height: '178px',
     
     marginBottom: '1rem',
    //  boxShadow: '8px 8px 8px 8px rgba(0.75,0.75,0.75,0.75)',
     borderRadius: 10,
    //  borderColor: '#423E3F  ',
        // borderStyle: 'solid',
        // borderWidth: '6px',

    }}
   />
        <Typography sx={{fontSize:"13px", fontWeight:"600", color:"#423E3F"}}>$ {rifaDetail.numbersPrice}</Typography>  

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
        // height: 300,
        // width: 300,
        // boxShadow:
        //  '3px 3px 15px 3px rgba(11,61,15,1),  inset 0px 0px 66px 17px rgba(41,125,47,1)',
        }}>
    
       <Typography
         variant='h6'
         
          style={{ color: '#333333', textAlign: 'center',fontWeight:"700",fontSize:"20px" }}>
         Valor por número
        </Typography>
       <Typography
        variant='h6'
         
        style={{ color: '#333333', textAlign: 'center',fontWeight:"700",fontSize:"15px"  }}>
        ${rifaDetail.numbersPrice}
       </Typography>
        </Box></Box>
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
       textAlign='left'
       fontWeight="700"
       style={{ color: '#333333'  }}>
       Números Disponibles
      </Typography>
      <Typography
       variant='h4'
       margin='10px'
       marginTop='3rem'
       fontWeight="700"

       style={{ color: '#33333', textAlign: 'center' }}>
       Selecciona los números que desees comprar
      </Typography>
     
     
     
      <Box
       maxHeigth='10%'

       sx={{
         borderRadius: '0.5rem',
        padding: '2em',
         bgcolor: '#D9D9D9',
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
            color: selectedNumbers.includes(element) ? '#D9D9D9' : '#D9D9D9',
            backgroundColor: selectedNumbers.includes(element)
             ? '#1A5276'
             : element.available
             ? '#423E3F'
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
         width: '186px',
         height: '44px',
          fontWeight: '700',
         margin: '2em',
         fontSize: "14px",
         color:"#423E3F",
         borderRadius: '20px',
         backgroundColor: '#D68E30',
         '&:hover': {
          backgroundColor: '#630014',
         },
        }}
        onClick={() => {
         // Realizar acción con los números seleccionados
         addToCart(selectedNumbers);
         navigate('/cart');
        }}>Agregar al Carrito
          {/* <Typography
       variant='h4'
       margin='10px'
       marginTop='3rem'
       fontWeight="700"
       fontSize= '20px' >  
      //  style={{ color: '#33333', textAlign: 'center' }}
        
        Agregar al Carrito
      </Typography> */}
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
