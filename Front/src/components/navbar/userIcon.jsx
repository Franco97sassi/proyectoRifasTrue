import React, { useState } from 'react';
import { Button, Menu, MenuItem, IconButton, useTheme } from '@mui/material';
import { AccountCircleRounded } from '@mui/icons-material';

//////////////////////////////////////////////////////////
const UserIcon = ({ onLoginClick, onRegisterClick   }) => {
 const [anchorEl, setAnchorEl] = useState(null);
 const theme = useTheme();
 const font = theme.palette.others.font;
 const userDataString = sessionStorage.getItem('userData');
 const userData = userDataString ? JSON.parse(userDataString) : null;
 const isUserLoggedIn = userData && userData.user && userData.token;
 //  console.log('USER DATAAA', userData);
 const isUserAdmin = isUserLoggedIn && userData.user.admin;
 const handleMenuOpen = (event) => {
  event.preventDefault();
  setAnchorEl(event.currentTarget);
 };

 const handleMenuClose = (event) => {
  setAnchorEl(null);
 };

 const handleLoginClick = () => {
  handleMenuClose();
  onLoginClick();
 };

 const handleRegisterClick = () => {
  handleMenuClose();
  sessionStorage.removeItem('userData');
  window.location.href = '/';
 };
//  const handleProductos = () => {
//     handleMenuClose();
//     window.location.href = '/admin/productos';
//     };

 const handleScroll = () => {
  setAnchorEl(null);
 };
 const handleOrdenes = () => {
    handleMenuClose();
    window.location.href = '/admin';
    };
    const handleMisOrdenes = () => {
        handleMenuClose();
        window.location.href = '/ordenes';
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
    disableScrollLock={true}>
    <MenuItem onClick={handleRegisterClick}>Cerrar Sesion</MenuItem>
    {isUserAdmin ?  (
        <div> 
    <MenuItem onClick={handleOrdenes}>  Pedidos</MenuItem>
    <MenuItem  >  Productos</MenuItem>
    </div>
    ) : (
       
        <MenuItem onClick={handleMisOrdenes}>Mis Pedidos</MenuItem>
         
       
    )}
   </Menu>
  </>
 );
};

export default UserIcon;
