const express=require('express');
const db=require('./dataBase/db');
const app=express();

app.use(express.json());

const studentModels=require('./models/students');

const studentrouter=require('./routers/studentsrouter');
app.use('/students',studentrouter);

app.use('/home',(req,res)=>{
    res.send('student details');
})

db.sync({}).then(()=>{
    app.listen(3000,()=>{
    console.log('server is running');
})

}).catch((err)=>{
    console.log(err);
})

