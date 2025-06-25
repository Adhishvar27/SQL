const express=require('express');
const app=express();
const path=require('path');
const cors=require('cors');
const db=require('./database/attendence');
app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname,'..','public')));
require('./moduls');

const studentrouter=require('./routers/studentrouter');
app.use('/student',studentrouter);

app.use('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'..','public','frontend.html'));
})

db.sync({alter:true}).then(()=>{
    app.listen(3000,()=>{
        console.log('server is running');
    })
}).catch((err)=>{
    console.log(err);
})
