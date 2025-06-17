const express=require('express');
const routers=express.Router();

const usercontroller=require('../controllers/userscontroller');

routers.post('/add',usercontroller.adduser);
routers.get('/getuser',usercontroller.selectuser);
routers.get('/:id/bookings',usercontroller.userwithbooking);

module.exports = routers;