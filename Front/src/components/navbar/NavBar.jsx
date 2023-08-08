import React, { useState } from 'react';
import {
  Box,
  IconButton,
  ListItemText,
  Typography,
  ListItem,
  List,
  useTheme,
  useMediaQuery,
  Drawer,
  AppBar,
  Slide,
  CssBaseline,
  FormControl,
} from '@mui/material';
import {
  Search,
  Message,
  DarkMode,
  LightMode,
  Notifications,
  Help,
  Close,
  Menu as MenuHamb,
  AccountCircleRounded,
  LocalPlay,
} from '@mui/icons-material';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
// import { useDispatch, useSelector } from 'react-redux';
// import { setMode } from '../../app/state/slices/modeSlice';
import { useNavigate, Link as RouterLink } from 'react-router-dom';

//-------------------- Assets --------------------------
import UserIcon from './userIcon';
import UserIconNoLogged from './userIconNoLogged';
import venado from '../../assets/venado.png';

/////////////////////////
const NavBar = ({ isUserAdmin }) => {
  const [isMobileMenuToggled, setIsMobileMenuToggled] = useState(false);
  const userData = JSON.parse(sessionStorage.getItem('userData'));
  //  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isNonMobileScreens = useMediaQuery('(min-width: 1000px)');

  const handleOpenMenu = () => {
    setIsMobileMenuToggled(true);
  };

  const handleCloseMenu = () => {
    setIsMobileMenuToggled(false);
  };

  const handleRegisterClick = () => {
    navigate('/register');
  };

  const handleLoginClick = () => {
    navigate('/login');
  };


  const theme = useTheme();
  const neutralLight = theme.palette.neutral.light;
  const dark = theme.palette.neutral.dark;
  const background = theme.palette.background.default;
  const primaryLight = theme.palette.primary.light;
  const alt = theme.palette.background.alt;
  const font = theme.palette.others.font;

  return (
    <>
      {userData ? (
        // User Logged Navbar
        <AppBar position='static'>
          <CssBaseline />
          <Box
            display='flex'
            // justifyContent='space-around'

            alignItems='center'
            bgcolor={alt}>
            <Box
              display='flex'

              // justifyContent='space-around'
              alignItems='center'
              height='75px'
              paddingLeft='50px'
            // paddingLeft='100px'
            >
              <Typography
                fontWeight='bold'
                fontSize='clamp(1rem, 2rem, 2.25rem)'
                color='primary'
                onClick={() => navigate('/home')}
                sx={{
                  '&:hover': {
                    transition: '0.4s',
                    backgroundColor: dark,
                    cursor: 'pointer',
                    borderRadius: '15px',

                  },
                }}>
                {isNonMobileScreens ? (
                  <img
                    src={venado}
                    alt='img not found'
                    width='max-width'
                    height="50px"
                  />
                ) : (
                  <img
                    src={venado}
                    alt='img not found'
                    width='max-width'
                    height="50px"

                  />
                )}
              </Typography>
            </Box>

            {/* DESKTOP NAV */}

            {isNonMobileScreens ? (
              <Box
                display='flex'

                justifyContent='flex-end'
                alignItems='center'
                gap='0.1rem'
                height='75px' paddingLeft='1000px'
              >


                <RouterLink to='/cart'>
                  <IconButton>
                    {/* <ShoppingBasketIcon sx={{ color: font, fontSize: '25px' }} /> */}
                    <Typography sx={{ color: font, fontSize: "15px", fontWeight: "1000", letterSpacing: '2px', }}>CARRITO</Typography>
                  </IconButton>
                </RouterLink>
{ isUserAdmin &&   
                <RouterLink to='/admin'>
 
                  <IconButton>
                    {/* <ShoppingBasketIcon sx={{ color: font, fontSize: '25px' }} /> */}
                    <Typography sx={{ color: font, fontSize: "15px", fontWeight: "1000", letterSpacing: '2px', }}>PANEL</Typography>
                  </IconButton>
                </RouterLink>
 }
                <UserIcon
                  onLoginClick={handleLoginClick}
                  onRegisterClick={handleRegisterClick}
                />

              </Box>
            ) : (
              <IconButton onClick={handleOpenMenu}>
                <MenuHamb />
              </IconButton>
            )}

            {/* MOBILE NAV */}
            {!isNonMobileScreens && isMobileMenuToggled && (
              <Drawer
                anchor='right'
                open={isMobileMenuToggled}
                onClose={handleCloseMenu}
                TransitionComponent={Slide}
              // TransitionProps={{
              //  direction: 'left',
              //  timeout: { enter: 500, exit: 500 },
              // }}
              >
                <Box
                  position='fixed'
                  right='0'
                  bottom='0'
                  height='100%'
                  zIndex='10'
                  maxWidth='500px'
                  minWidth='250px'
                  backgroundColor={alt}>
                  {/* CLOSE ICON */}
                  <Box
                    display='flex'
                    justifyContent='flex-end'
                    p='1rem'>
                    <IconButton onClick={handleCloseMenu}>
                      <Close />
                    </IconButton>
                  </Box>

                  {/* MENU ITEMS */}

                  <Box
                    display='flex'
                    flexDirection='column'
                    justifyContent='center'
                    gap='3rem'
                    alignItems='center'>
                    <UserIcon
                      onLoginClick={handleLoginClick}
                      onRegisterClick={handleRegisterClick}
                    />


                  </Box>
                </Box>
              </Drawer>
            )}
          </Box>
        </AppBar>
      ) : (
        // User No Logged Navbar
        <AppBar position='static'>
          <CssBaseline />
          <Box
            display='flex'
            // justifyContent='space-around'

            alignItems='center'
            height='75px'

            paddingLeft='50px'
            bgcolor={alt}>

            <Box
              display='flex'
              //  justifyContent='space-between'
              alignItems='center'
            // marginLeft={"10px"}
            >
              <Typography
                fontWeight='bold'
                fontSize='clamp(1rem, 2rem, 2.25rem)'
                color='primary'
                onClick={() => navigate('/home')}
                sx={{
                  '&:hover': {
                    transition: '0.4s',
                    backgroundColor: dark,
                    cursor: 'pointer',
                    borderRadius: '15px',
                  },
                }}>
                {isNonMobileScreens ? (
                  <img
                    src={venado}
                    alt='img not found'
                    width='max-width'
                    height="50px"
                  />
                ) : (
                  <img
                    src={venado}
                    alt='img not found'
                    width='125rem'
                    height="75px"

                  />
                )}
              </Typography>
            </Box>

            {/* DESKTOP NAV */}

            {isNonMobileScreens ? (
              <Box
                display='flex'
                justifyContent='space-between'
                alignItems='center'
                flexGrow={1}
                gap='1rem'
                paddingLeft='825px'
                paddingRight='25px'
              >
                <Box
                  display='flex'

                  justifyContent='flex-end'  // Alinea RouterLink a la derecha
                  gap='1rem'
                  alignItems='center'


                >
                  <RouterLink
                    to='/register'
                    style={{ textDecoration: 'none' }}>
                    <Typography sx={{ color: font, fontSize: "15px", fontWeight: "1000", letterSpacing: '2px' }}>REGISTRARME</Typography>
                  </RouterLink>

                  <RouterLink
                    to='/login'
                    style={{ textDecoration: 'none' }}>
                    <Typography sx={{ color: font, fontSize: "15px", fontWeight: "1000", letterSpacing: '2px' }}>INICIO SESION</Typography>
                  </RouterLink>
                </Box>
                <Box flexGrow={1} display='flex' justifyContent='flex-end'>
                  <UserIconNoLogged
                    onLoginClick={handleLoginClick}
                    onRegisterClick={handleRegisterClick}
                  />
                </Box>
              </Box>
            )
              :
              (
                <IconButton onClick={handleOpenMenu}>
                  <MenuHamb />
                </IconButton>
              )
            }








            {/* MOBILE NAV */}
            {!isNonMobileScreens && isMobileMenuToggled && (
              <Drawer
                anchor='right'
                open={isMobileMenuToggled}
                onClose={handleCloseMenu}
                TransitionComponent={Slide}
                TransitionProps={{
                  direction: 'left',
                  timeout: { enter: 500, exit: 500 },
                }}>
                <Box
                  position='fixed'
                  right='0'
                  bottom='0'
                  height='100%'
                  zIndex='10'
                  maxWidth='500px'
                  minWidth='250px'
                  backgroundColor={alt}>
                  {/* CLOSE ICON */}
                  <Box
                    display='flex'
                    // justifyContent='flex-end'
                    p='1rem'>
                    <IconButton onClick={handleCloseMenu}>
                      <Close />
                    </IconButton>
                  </Box>

                  {/* MENU ITEMS */}

                  <Box
                    display='flex'
                    flexDirection='column'
                    // justifyContent='center'
                    gap='3rem'
                    alignItems='center'>
                    <UserIconNoLogged
                      onLoginClick={handleLoginClick}
                      onRegisterClick={handleRegisterClick}
                    />

                    <RouterLink to=''>
                      <IconButton>
                        <Help sx={{ color: font, fontSize: '25px' }} />
                      </IconButton>
                    </RouterLink>
                  </Box>
                </Box>
              </Drawer>
            )}
          </Box>
        </AppBar>
      )}
    </>
  );
};

export default NavBar;
