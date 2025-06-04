const express=require('express');
const app=express();
const mysql=require('mysql2');



app.use('/',(req,res)=>{
    res.send('Hello World');
})

app.listen(3000,()=>{
    console.log('Server is running');
})