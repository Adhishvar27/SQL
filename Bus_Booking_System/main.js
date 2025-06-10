const express=require('express');
const app=express();
const db=require('./Create_DataBase_Querys/dataBase');
const userModels=require('./models/users');
const busModels=require('./models/bus');
const paymnetModels=require('./models/payment');
const bookingModels=require('./models/booking');
app.use(express.json());

const usersrouters=require('./routers/usersrouter');
app.use('/users',usersrouters);

const busrouters=require('./routers/busrouter');
app.use('/bus',busrouters);

app.use('/home',(req,res)=>{
    res.send('Hello welcome to bus ticket booking system');
})

db.sync({force:true}).then(()=>{
    app.listen(3000,()=>{
    console.log('Server is running');
})
}).catch((err)=>{
    console.log(err);
})
