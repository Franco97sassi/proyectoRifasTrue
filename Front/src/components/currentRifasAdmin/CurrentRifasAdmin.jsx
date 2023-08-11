import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Typography, Grid, Box } from '@mui/material';


//-------------------- Actions --------------------------
import { getRifas } from '../../store/state/actions/rifas';

//-------------------- Components --------------------------
import RifaCard from '../rifaCard/RifaCard';
import { Link } from 'react-router-dom';
import RifaCardAdmin from '../rifaCard/RifaCardAdmin';


/////////////////////////////
const CurrentRifasAdmin = () => {
 const dispatch = useDispatch();

 const { allRifas } = useSelector((state) => state.rifas);
 console.log(allRifas);

 useEffect(() => {
  dispatch(getRifas());
 }, []);

 //  console.log(allRifas);
const handleNow=()=>{
   dispatch(getRifas())
}


 return (
    <Box margin='4rem' marginTop='0.1rem' padding='0.1rem'>
    <Grid container spacing={2}   display="flex"  flexDirection="column" justifyContent="spaceBetween"    
 alignItems="spaceBetween" >
      {allRifas.map((rifa) => (
        <Grid item key={rifa.id}   >
          <RifaCardAdmin rifa={rifa} handleNow={handleNow} />
        </Grid>
      ))}
    </Grid>
  </Box>
 );
};

export default CurrentRifasAdmin;