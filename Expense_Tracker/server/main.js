const express=require("express");
const app=express();
const path=require('path');
const db=require('./Database/db');
const cors=require('cors');

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname,'..','public')));
const expenseModel=require('./models/expense');

const expenserouter=require('./routers/expenserouter');
app.use('/expense',expenserouter);

app.use('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'..','public','index.html'));
})
db.sync({force:true}).then(()=>{
    app.listen(3000,()=>{
        console.log('server is running');
    })
}).catch((error)=>{
    console.log(error);
})
