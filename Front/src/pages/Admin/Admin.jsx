
// import { TextField } from '@mui/material';
// import Footer from '../../components/footer/footer';
// import NavBar from '../../components/navbar/navBar';
// import { useState } from 'react';
// import axios from 'axios';
// const   VITE_SV_HOST   = import.meta.env.VITE_SV_HOST;  
// const Admin = () => {
//     const [svHost, setSvHost] = useState('');
//     const [product, setProduct] = useState('');
//     const [imgProduct, setImgProduct] = useState('');
//     const [description, setDescription] = useState('');
//     const [numbersPrice, setNumbersPrice] = useState('');
//     const [totalNumbers, setTotalNumbers] = useState('');
  
    
//     const onSubmit = async ()  => {
       

//         const data={
//             product: product,
//             imgProduct: imgProduct,
//             description: description,
//             numbersPrice: numbersPrice,
//             totalNumbers: totalNumbers,
    
//         }
//     try{
//         const res = await axios.post(`${VITE_SV_HOST}/createRifa`, data)
//         console.log(res)

//      }
//      catch(error){
//         console.error(error)
     
//     }

//     }


//  return (
//   <>
//    <NavBar />
   
//    <div>
//         Product: <input type="text" onChange={(e) => setProduct(e.target.value)} />
//         Img Product: <input type="text" onChange={(e) => setImgProduct(e.target.value)} />
//         Description: <input type="text" onChange={(e) => setDescription(e.target.value)} />
//         Numbers Price: <input type="text" onChange={(e) => setNumbersPrice(e.target.value)} />
//         Total Numbers: <input type="text" onChange={(e) => setTotalNumbers(e.target.value)} />
//       </div>
//     <button onClick={onSubmit}> Crear Producto</button> 

  
//    <Footer />
//    </>
//  );
// };



// export default Admin;

 

import { Input } from '@mui/material';
import Footer from '../../components/footer/footer';
import NavBar from '../../components/navbar/navBar';
import {   useState } from 'react';
import axios from 'axios';

const host = import.meta.env.VITE_SV_HOST ;

const Admin = () => {
   const [product, setProduct] = useState('');
  const [imgProduct, setImgProduct] = useState('');
  const [description, setDescription] = useState('');
  const [numbersPrice, setNumbersPrice] = useState('');
  const [totalNumbers, setTotalNumbers] = useState('');

 

  const onSubmit = async () => {
    if (!product || !imgProduct || !description || !numbersPrice || !totalNumbers) {
      console.error('Todos los campos deben completarse');
      return;
    }

    const data = {
      product: product,
      imgProduct: imgProduct,
      description: description,
      numbersPrice: numbersPrice,
      totalNumbers: totalNumbers,
    };

    console.log(data)
    try {
      const res = await axios.post(`${host}/rifas/createRifa`, data);
      console.log(res);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <NavBar />

      <div>
        Product: <Input type="text" onChange={(e) => setProduct(e.target.value)} />
        Img Product: <Input type="text" onChange={(e) => setImgProduct(e.target.value)} />
        Description: <Input type="text" onChange={(e) => setDescription(e.target.value)} />
        Numbers Price: <Input type="text" onChange={(e) => setNumbersPrice(e.target.value)} />
        Total Numbers: <Input type="text" onChange={(e) => setTotalNumbers(e.target.value)} />
      </div>
      <button onClick={onSubmit}> Crear Producto</button>

      <Footer />
    </>
  );
};

export default Admin; 