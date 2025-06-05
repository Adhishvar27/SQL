const express=require('express');
const app=express();
const mysql=require('mysql2');

const connection= mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'testdatabase'
});

connection.connect((err)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log('Connection created successfully');

    const creationQuery=`create table students(
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    std VARCHAR(5) NOT NULL
    )`

    connection.execute((creationQuery),(err)=>{
        if(err){
            console.log(err);
            connection.end();
            return;
        }
        console.log('query executed successfully');
    })
})

app.use('/',(req,res)=>{
    res.send('Hello World');
})

app.listen(3000,()=>{
    console.log('Server is running');
})
