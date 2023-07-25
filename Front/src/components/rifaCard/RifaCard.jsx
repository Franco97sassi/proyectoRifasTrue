import React from 'react';
import { Box, Typography } from '@mui/material';

//-------------------- Assets --------------------------
import cardImg from '../../assets/cardImg.webp';

//////////////////////////////////
const RifaCard = ({ rifa }) => {
 return (
  <Box
   sx={{
    width: '375px',
    height: '375px',
    background:"#FFA840",
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    borderRadius: 2,
    
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
    fontWeight:"500" ,
//     backgroundColor: 'rgba(0, 0, 0, 0.5)' 
}}
paddingBottom="0.5rem"
    >
    {rifa.product}  
   </Typography>
  
   <img
    src={rifa.imgProduct}
    alt={rifa.product}
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
        <Typography sx={{fontSize:"18px", fontWeight:"500", color:"black"}}>$ {rifa.numbersPrice}</Typography>  

  </Box>
 );
};

/////////////////////

export default RifaCard;
