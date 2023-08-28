import React, { useState } from 'react';
import { Button, Menu, MenuItem, IconButton, useTheme } from '@mui/material';

import { AccountCircleRounded } from '@mui/icons-material';
import { Box } from '@mui/system';

const UserIconNoLogged = ({ onLoginClick, onRegisterClick }) => {
 const [anchorEl, setAnchorEl] = useState(null);
 const theme = useTheme();
 const font = theme.palette.others.font;

 const handleMenuOpen = (event) => {
  event.preventDefault();
  setAnchorEl(event.currentTarget);
 };

 const handleMenuClose = (event) => {
  setAnchorEl(null);
 };

 const handleLogin = () => {
  handleMenuClose();
  window.location.href = '/login'
 };

 const handleRegister = () => {
  handleMenuClose();
  window.location.href = '/register'
 };

 const handleScroll = () => {
  setAnchorEl(null);
 };

 document.addEventListener('scroll', handleScroll);

 return (
  <>
   <IconButton onClick={handleMenuOpen}>
    <AccountCircleRounded sx={{ color: font, fontSize: '45px' }} />
     
   </IconButton>







   <Menu
     
    anchorEl={anchorEl}
    open={Boolean(anchorEl)}
    onClose={handleMenuClose}
    disableScrollLock={true}
    PaperProps={{
        style: {
          backgroundColor: '#D68E30',
          width: '200px', // Ajusta el ancho según tus necesidades
            maxHeight: '400px', // Ajusta el alto máximo según tus necesidades
        },
      }}>
      
         
       
 
   <Box sx={{width:"center",  }}> 
     
    
 
     </Box>
     
        <div> 
     
    <MenuItem  onClick={handleLogin}   sx={{
    display:"flex",justifyContent:"center" // Añade el estilo para centrar el texto
  }} >  Inicio Sesion</MenuItem>
    </div>
    
       
        <MenuItem  onClick={handleRegister} sx={{
          display:"flex",justifyContent:"center" // Añade el estilo para centrar el texto
        }}>Registrarme</MenuItem>
        
  
   </Menu> 
  </>
 );
};

export default UserIconNoLogged;
