import React from 'react';
import { Box, Divider, Grid, IconButton, Typography } from '@mui/material';
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from 'react';
import axios from 'axios';
//-------------------- Assets --------------------------
import cardImg from '../../assets/cardImg.webp';
const host = import.meta.env.VITE_SV_HOST;
//////////////////////////////////
 

const RifaCardAdmin = ({ rifa ,handleNow}) => {
  const onDelete = async (rifaId) => {
  
    try {
      const res = await axios.delete(`${host}/rifas/deleteRifa/${rifaId}`  );
      console.log(res);
      handleNow()
    } catch (error) {
      console.error(error);
    }
  };

  

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',

            }}>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',

                }}> 
            
            <Grid container spacing={0} display="flex" >
                    <Grid
                      item
                       xs={12}
                       sm={3}
                      // container
                      display="flex"
                      justifyContent="center"
                      alignItems="center"  
                    >
                      <Typography variant="h4">{rifa.product}</Typography>
                    </Grid>
                  
                    <Grid
                      item
                        xs={12}
                       sm={3}
                      // container
                      display="flex"
                      justifyContent="center"
                      alignItems="center"  
                    >
                      <Typography variant="h4">${rifa.numbersPrice}</Typography>
                    </Grid>

                    <Grid
                      item
                       xs={12}
                       sm={2.5}
                      display="flex"
                      justifyContent="center"
                      alignItems="center" 
                    >
                       <Typography variant="h4"><img
    src={rifa.imgProduct}
    alt={rifa.product}
    style={{
     width: '50px',
     height: '50px',
     
     marginBottom: '1rem',
    //  boxShadow: '8px 8px 8px 8px rgba(0.75,0.75,0.75,0.75)',
     borderRadius: 10,
    //  borderColor: '#423E3F',
        // borderStyle: 'solid',
        // borderWidth: '6px',

    }}
   /> </Typography>
                    </Grid>
                   
                    <Grid
                      item
                       xs={12}
                       sm={3.5}
                      // container
                      display="flex"
                      justifyContent="center"
                      alignItems="center" 
                    >
                      <Typography variant="h4">BORRAR
                      <IconButton
                      onClick={() => onDelete(rifa.id)}
                      edge="end"
                      padding="1rem"

                      aria-label="delete"
                    >
                      <DeleteIcon />
                    </IconButton> 
                      </Typography>
                      <Divider sx={{ margin: '1rem 0' }} /> 
                    </Grid>
                    <Divider sx={{ margin: '1rem 0' }} /> 
                    
                  </Grid>
                  <Divider sx={{ margin: '1rem 0' }} /> 
            {/* <Typography sx={{ fontSize: "13px", fontWeight: "600", color: '#423E3F' }}>$ {rifa.totalNumbers}</Typography> */}

        </Box>    <Divider sx={{ margin: '1rem 0' }} /> 
  </Box >   
 );
};

/////////////////////

export default RifaCardAdmin;
