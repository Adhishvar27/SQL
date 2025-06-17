const express=require('express');
const app=express();
const db=require('./Create_DataBase_Querys/dataBase');
require('./models');
app.use(express.json());

const usersrouters=require('./routers/usersrouter');
app.use('/users',usersrouters);

const busrouters=require('./routers/busrouter');
app.use('/bus',busrouters);

const bookingrouter=require('./routers/bookingrouter');
app.use('/booking',bookingrouter);

app.use('/home',(req,res)=>{
    res.send('Hello welcome to bus ticket booking system');
})

db.sync({}).then(()=>{
    app.listen(3000,()=>{
    console.log('Server is running');
})
}).catch((err)=>{
    console.log(err);
})
