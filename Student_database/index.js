const express=require('express');
const db=require('./dataBase/db');
const app=express();

require('./models');

app.use(express.json());

//models
//const studentModels=require('./models/students');

const studentrouter=require('./routers/studentsrouter');
app.use('/students',studentrouter);

app.use('/home',(req,res)=>{
    res.send('student details');
})

db.sync({force:true}).then(()=>{
    app.listen(3000,()=>{
    console.log('server is running');
})

}).catch((err)=>{
    console.log(err);
})

