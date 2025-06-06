const express=require('express');
const app=express();

app.use(express.json());

const usersrouters=require('./routers/usersrouter');
app.use('/users',usersrouters);

const busrouters=require('./routers/busrouter');
app.use('/bus',busrouters);

app.use('/home',(req,res)=>{
    res.send('Hello welcome to bus ticket booking system');
})

app.listen(3000,()=>{
    console.log('Server is running');
})