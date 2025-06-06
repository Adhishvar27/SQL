const express=require('express');
const routers=express.Router();

const buscontroller=require('../controllers/buscontroller');

routers.post('/addbus',buscontroller.addbus);
routers.get('/showbus',buscontroller.retrivebus);


module.exports=routers;