import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Button, Typography, useTheme } from '@mui/material';

//-------------------- Assets --------------------------
import LandingImg from '../../assets/Landing.jpg';

//-------------------- Components --------------------------
import NavBar from '../../components/navbar/NavBar.jsx';
import Footer from '../../components/footer/footer.jsx';

/////////////////////
const LandingPage = () => {
 const theme = useTheme();
 const background = theme.palette.background.login;

 return (
  <Box
   sx={{
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    backgroundImage: `url(${LandingImg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
   }}>
   <NavBar/>
   <Box
    sx={{
     backgroundColor: 'rgba(0, 0, 0, 0.65)',
     display: 'flex',
     flexDirection: 'column',
     justifyContent: 'flex-start',
     alignItems: 'flex-start',
     flex: '1 1 auto',
     paddingLeft: '2em',
 
    }}>
    <Typography
     variant='h1'
     textAlign='center'
     marginTop='2em'
    //  paddingLeft= '2em',

     fontSize='5em'
     color='whitesmoke'
     style={{
      textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
     }}>
     Bienvenidos 
    </Typography>
    {/* <Typography
     variant='h3'
     textAlign='center'
     marginTop='1em'
     color='whitesmoke'>
      Explora nuestras increíbles rifas
    </Typography> */}
    <Box
     sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: '0.1em',
     }}>
     <Link to='/home'>
      <Button
       variant='contained'
       sx={{
        width: '200px',
        height: '60px',
        fontSize: '1.5rem',
        borderRadius: '2rem',
        margin: '1em',
 
        backgroundColor: '#9e0423',
        '&:hover': {
         backgroundColor: '#630014',
        },
       }}>
      ¡Participar!
      </Button>
     </Link>
    </Box>
   </Box>
   <Footer />
  </Box>
 );
};

/////////////////////////////

export default LandingPage;
