const express=require('express');
const routers=express.Router();

const bookingcontroller=require('../controllers/bookingcontroller');
routers.post('/',bookingcontroller.addbooking);

module.exports=routers;