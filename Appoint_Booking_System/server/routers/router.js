const express=require('express');
const routers=express.Router();

const controller=require('../controller/controller');

routers.post('/',controller.adddata);
routers.get('/',controller.getuser);
routers.put('/:id',controller.updateUser);
routers.delete('/:id',controller.deleteUser);

module.exports=routers;
