const { Router } = require('express');

//-------------------- Controllers & Middlewares --------------------------
const { isUserLoggedIn, isUserLoggedInAdmin } = require('../middlewares/auth');
const {
 checkRifas,
 createRifa,
 rifaDetail,
 updateRifa,
 buyRifa,
 deleteRifa,

} = require('../controllers/rifas.controller');

const{postPagar}=require("../controllers/mercadoControllers")
const router = Router();

//-------------------- Rifas Routes --------------------------

router.get('/checkRifas', checkRifas);

router.get('/detail/:id', rifaDetail);

router.post('/createRifa', createRifa);
router.delete('/deleteRifa/:id',deleteRifa);

// router.post('/updateRifa', isUserLoggedInAdmin, updateRifa);

// router.post('/deleteRifa', isUserLoggedInAdmin, deleteRifa);

router.put('/buyRifa', isUserLoggedIn, buyRifa);

///////////////////////////////////////////////
router.post("/mercadoPago",postPagar)
module.exports = router;
