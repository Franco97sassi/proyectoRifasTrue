import React, { useContext, useState } from 'react';
import { Box, Button, IconButton, Typography } from '@mui/material';
import "./stylesCart.css"
//-------------------- Components --------------------------
import NavBar from '../../components/navbar/NavBar';
import Footer from '../../components/footer/footer';
import ShopCart from '../../components/shopCart/shopCart';
import CurrentRifas from '../../components/currentRifas/CurrentRifas';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import HighlightOffRoundedIcon from '@mui/icons-material/HighlightOffRounded';
// import { CartContext } from '../../contexts/CartContext.Provider';
import  ReactTextTransition  from 'react-text-transition';
import RifaCard from '../../components/rifaCard/RifaCard';
import rifaMuestra  from "./rifaMuestra.js"
  import Form from '../../components/Form';
////////////////////
const Cart = () => {
  const rifaas=  
    [{
      imgProduct: "https://imgur.com/Fe6Kc6H",
       product:"Remera",
       numbersPrice:1000,
 
   }]
  


  // const { cartProducts, removeFromCart, clearCart, addToCart, getCartItems } = useContext(CartContext)
  const [noProductMessage, setNoProductMessage] = useState("No hay productos en el carrito");

  return (
    <>

       <Box
   sx={{
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
   }}>  
      <NavBar  />
       <Box
    sx={{ flex: '1 1 auto' }}
    bgcolor='#F5F5F5'> 
        <ShopCart />   
      {/* <Typography
    margin='1em'
    style={{ color: '#333333' }} // Aumenta el tamaño de la fuente
    variant='h2'
    align='center'
    gutterBottom
    sx={{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
    }}>
    Finalizar Compra
     
   </Typography> */}

     {/* <div className='boxPosition'>   
     <Box
   sx={{
    width: '300px',
    height: '350px',
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
    style={{ color: '#c4bdbd', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
    {rifaas.product}
   </Typography>
   
   <img
    src= "https://i.imgur.com/Fe6Kc6H.png"
     
    style={{
     width: '100%',
     height: '240px',
     
     marginBottom: '1rem',
     boxShadow: '0px 5px 8px 0px rgba(0,0,0,0.75)',
     borderRadius: 2,
    }}
   />
    <Typography sx={{fontSize:"18px", fontWeight:"500", color:"black"}}>$ 1000</Typography>   */}
   
  {/* </Box> */}
     {/* <CurrentRifas /> */}

       {/* <Box
      margin='1em'
      sx={{
       border: '0.2em solid #213911d2',
       borderRadius: '0.5rem',
       bgcolor: '#58aa2271',
       height: 100,
       flex: '1 1 auto',
        display: 'flex',
        flexDirection: 'row',
           alignItems: 'center',
            justifyContent: 'flex-end',

             
           

       boxShadow:
        '3px 3px 15px 3px rgba(11,61,15,1),  inset 0px 0px 66px 17px rgba(41,125,47,1)',
      }}>
       
       <Typography

        variant='h5'
        margin='1em'
        style={{ color: '#333333', textAlign: 'center' }}>
       Numeros seleccionados
       <div className='circlesPositions'>  
       <div className="circle"> 1</div>
       <div className="circle"> 2</div>
       <div className="circle"> 3</div>
       <div className="circle"> 4</div>
       </div>

       </Typography>
       <Typography
        variant='h3'
        margin='1em'
        style={{ color: '#333333', textAlign: 'center' }}>
         Subtotal:$1000
       </Typography>
       
     </Box>
     </div> */}

      {/* desde aca*/}
      {/* <Typography
       variant='h4'
       margin='10px'
       marginBottom='3rem'
       style={{ color: '#33333', textAlign: 'center' }}>
        <div className='boxPosition'>  
         */}
       
        
       {/* <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={top100Films}
      sx={{ width: 10 }}
      renderInput={(params) => <TextField {...params}   />}
    /> */}
      
     {/* </div>
      </Typography>
      
   
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center',
          flexWrap: 'wrap',
          }}
           
        > 
     
       
        <Typography
        variant='h2'
        margin='1em'
        style={{ color: '#333333', textAlign: 'center' }}>
        Total : 
        <Typography
        variant='h4'
        margin='1em'
        style={{ color: '#333333', textAlign: 'center' }}>
        $ 1000.00
       </Typography>
       </Typography>
       </Box>
        <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center',
          flexWrap: 'wrap',
          }}
           
        >  */}
       {/* <Button
        variant='contained'
        sx={{
         width: '200px',
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
        Pagar
       </Button> */}
       {/* <Form setNoProductMessage={setNoProductMessage}  /> */}
  {/* </Box> */}
       {/* <Form 
      //  setNoProductMessage={setNoProductMessage} 
      //  cartClear={clearCart}
        /> */}

      {/* </Box> */}






















      {/* <div> */}
          
         {/*<IconButton aria-label="delete" onClick={clearCart}>
          <RemoveShoppingCartIcon />
        </IconButton>
        <div>
          {cartProducts.length === 0 ?
            <div>
              <RemoveShoppingCartIcon />
              <h2>No hay Productos</h2>
            </div>
            :
            cartProducts.map((item) => (
              <div key={item.product.id}>
                <img src={item.product.image} alt="" />
                <h3>{item.product.title}</h3>
                <strong>{"$" + (item.product.price)}</strong>
                <IconButton aria-label="delete" onClick={()=>removeFromCart(item.producto.id)}>
                  <HighlightOffRoundedIcon />
                </IconButton>
                <ItemCount product={item.product} initial={item.quantity} hideAddToCart={true} />
                <div>
                  <ReactTextTransition children={"$" + (item.product.price * item.quantity)}
                    springConfig={{ stiffness: 50, damping: 20 }}
                    inline
                    overflow={false} />
                </div>

              </div>
            ))}
            
            {cartProducts.length > 0 && <div>
                        {/* <Form   cartClear={clearCart} /> */}
                        {/* <Stack>
                            <h2 className='h2'>Total:
                                <ReactTextTransition
                                    children={"$" + cartProducts.reduce((acc, item) => acc + item.product.price * item.quantity, 0)} /></h2>
                        </Stack>
                    </div>}
        </div>   */}
      {/* </div> */}

      </Box>  
      <Footer />
        </Box>  
    </>
  );
};

export default Cart;
