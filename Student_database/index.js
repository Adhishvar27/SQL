const express=require('express');
const db=require('./dataBase/db');
const app=express();

require('./models');

app.use(express.json());

//models
//const studentModels=require('./models/students');

const studentrouter=require('./routers/studentsrouter');
app.use('/students',studentrouter);

const deptrouter=require('./routers/deptrouter');
app.use('/dept',deptrouter);

const courserouter=require('./routers/coursesrouter');
app.use('/courses',courserouter);

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

