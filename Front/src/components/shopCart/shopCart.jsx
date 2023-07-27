import React from 'react';
import {
 Box,
 Typography,
 List,
 ListItem,
 ListItemText,
 IconButton,
 ListItemAvatar,
 Avatar,
 Button,
} from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { useNavigate } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';

import { removeNumbersToCart, buyRifas } from '../../store/state/actions/rifas';
import ReactTextTransition  from "react-text-transition";

import './shopCart.css'; // Importa el archivo CSS para las transiciones

const ShopCart = () => {
 const dispatch = useDispatch();
 const navigate = useNavigate();
 const cart = useSelector((state) => state.rifas.cart);

 const handleDeleteCart = (id, rifaNumber) => {
  dispatch(removeNumbersToCart(id, rifaNumber));
 };

 const handleBuyClick = () => {
  // Filtrar y transformar el carrito según los campos necesarios
  const filteredCart = cart.map((item) => {
   return {
    rifaId: item.rifaId,
    number: item.number,
    userId: item.userId,
   };
  });
  console.log('filtrado', filteredCart);
  // Llamar a la acción buyRifas con el carrito filtrado
  dispatch(buyRifas(filteredCart));
  navigate('');
 };

 return (
  <Box
   display='flex'
   flexDirection='column'
   alignItems='center'
   width='80%' // Añadido para reducir el ancho del componente
   margin='0 auto' // Centra el componente horizontalmente
  >
    
   <Typography
    margin='1em'
    style={{ color: '#333333' }} // Aumenta el tamaño de la fuente
    variant='h2'
    // align='center'
      
    gutterBottom>
    Carrito de Compras
   </Typography>
   <TransitionGroup component={List}>
    {cart && cart.length > 0 ? (
     cart.map((item) => (
      <CSSTransition
       key={item.rifaId + ` num: ${item.number}`}
       classNames='fade'
       timeout={300}>
       <ListItem>
        {/* <ListItemAvatar>
         <Avatar
          src={item.imgProduct}
          sx={{ width: 60, height: 60 }}
         />
        </ListItemAvatar> */}
          <Box
   sx={{
    width: '230px',
    height: '282px',
    background:"#D9D9D9",
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
    fontSize='13px' key={item.id}
    textOverflow='ellipsis'
    style={{ color: '#423E3F', 
    fontWeight:"600"    // backgroundColor: 'rgba(0, 0, 0, 0.5)' 
    }}  >
             

    {item.productName}   
   </Typography> 
 
   <img
    src={item.imgProduct}
    alt={item.product}
    style={{
      width: '172px',
     height: '178px',
     
     marginBottom: '1rem',
    //  boxShadow: '8px 8px 8px 8px rgba(0.75,0.75,0.75,0.75)',
     borderRadius: 10,
     borderColor: '#423E3F  ',
        borderStyle: 'solid',
        borderWidth: '6px',
    }}
   />
        <Typography sx={{fontSize:"13px", fontWeight:"600", color:"#423E3F"}}>$ {item.numbersPrice}</Typography>  

  </Box>
  <Box
   sx={{
    width: '600px',height: '282px', background:"#D9D9D9",backgroundSize: 'contain',backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',borderRadius: 2,margin: '1rem',padding: '1rem' ,
    display: 'flex',flexDirection: 'row'  
    }}>
      <Box sx={{display: 'flex',flexDirection: 'column', justifyContent:"center",alignItems:"center",paddingBottom:"200px"    }}>
          <ListItemText
         primary={
          <Typography
           variant='body1' paddingTop={5}  paddingLeft={5}
           style={{ color: '#423E3F',   fontWeight: 'bold' }}>
           Número Seleccionado:
           </Typography>
         }
         
         primaryTypographyProps={{
          style: { color: '#423E3F', textAlign: 'left' },
         }}
         style={{ flex: 1}}
        />  
           <Button
      //  maxHeigth='10%'
       
       sx={{ 
        
        
        backgroundColor:'#423E3F',
        borderRadius: '50%', 
            fontSize: '2rem',
            width: '4rem',
            height: '4rem',
            display: 'flex',
           
            color: '#D9D9D9',
            '&:hover': {
              backgroundColor: '#423E3F',
             },
       }}> 
            {item.number}  </Button> </Box>
          {/* </Typography>
         }
         
         primaryTypographyProps={{
          style: { color: 'green', textAlign: 'right' },
         }}
         style={{ flex: 1 }}
        />   */}
          <ListItemText
         primary={
          <Typography
           variant='h5'
           style={{ color: '#423E3F', textAlign: 'right',display:"flex",justifyContent:"flex-end", paddingTop:"235px",fontWeight: 'bold' }}>
           Subtotal: ${item.numbersPrice}
          </Typography>
         }
         style={{ textAlign: 'right' }}
        />    
        <IconButton
         onClick={() => handleDeleteCart(item.rifaId, item.number)}
         edge='end'
          padding='1rem'
           aria-label='delete'>
         <DeleteIcon  />
        </IconButton> </Box>
       </ListItem> 
        
      </CSSTransition>
     ))
    ) : (
     <Typography
      variant='body1'
      align='center'
      color='textSecondary'
      style={{ margin: '1em 0' }}>
      Sin items
     </Typography>
    )}
   </TransitionGroup>

   {cart.length > 0 && (
    <Box
     width='100%'
     sx={{
      display: 'flex',
        flexDirection: 'column',
      justifyContent: 'center',
        alignItems: 'flex-end',
        marginLeft: '3.5rem',
        
      }}>
         
  <Box
   sx={{
    width: '600px',height: '65px', background:"#D9D9D9",backgroundSize: 'contain',backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',borderRadius: 2,marginRight: '9.6rem',paddingRight: '3.5rem' 
      
    }}>
      <ListItemText
         primary={
         <Typography
           variant='h4'
           style={{ color: '#423E3F',   fontWeight: 'bold',paddingTop:"20px",paddingLeft:"450px"  }}>
           Total: 
           <span
                                    children={"$" + cart.reduce((acc, item) => acc + item.numbersPrice  , 0)} />        
          </Typography>
             }
             style={{ textAlign: 'right' }}
            /> 
         </Box>
     <Button
      variant='contained'
      sx={{
       width: '186px',
       height: '44px',
       fontSize: '1.05rem',         borderRadius: '40px',
       color:"#423E3F",
       fontWeight: '700',

       margin: '2em',marginRight: '9.5rem',
       backgroundColor: '#D68E30',
       '&:hover': {
        backgroundColor: '#630014',
       },
      }}
      onClick={() => {
       // Realizar accion de compra
       handleBuyClick();
      }}>
      Pagar
     </Button>
    </Box>
   )}
  </Box>
 );
};

export default ShopCart;
