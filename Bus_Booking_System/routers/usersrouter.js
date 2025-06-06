const express=require('express');
const routers=express.Router();

const usercontroller=require('../controllers/userscontroller');

routers.post('/add',usercontroller.adduser);
routers.get('/getuser',usercontroller.selectuser);

module.exports = routers;