const express=require('express');
const app=express();

app.use(express.json());

const studentRouter=require('./routers/studentrouter');

app.use('/students',studentRouter);


app.use('/',(req,res)=>{
    res.send('Hello World');
})

app.listen(3000,()=>{
    console.log('server is running');
})
