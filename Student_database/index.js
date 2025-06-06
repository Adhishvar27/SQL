const express=require('express');
const app=express();

app.use(express.json());

const studentrouter=require('./routers/studentsrouter');
app.use('/students',studentrouter);

app.use('/home',(req,res)=>{
    res.send('student details');
})

app.listen(3000,()=>{
    console.log('server is running');
})
