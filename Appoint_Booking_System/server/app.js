const express=require('express');
const cors=require('cors');
const path=require('path');
const app=express();
const db=require('./database/database');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'..','public',)));

const router=require('./routers/router');
app.use('/submit',router);

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'..','public','frontPage.html'))
});

db.sync().then(()=>{
app.listen(8000,()=>{
    console.log('Server is running');
})
}).catch((err)=>{
    console.log(err);
})
