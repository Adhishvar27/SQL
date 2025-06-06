const mysql=require('mysql2');

const connection=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'students_database'
})

connection.connect((err)=>{
    if(err) return console.log(err);
    console.log('connection made successfully');

    const createQuery=`create table IF NOT EXISTS students (
    id int Primary Key Auto_Increment,
    name VARCHAR(25),
    email VARCHAR(50) Unique,
    age INT
    )`

    connection.query(createQuery,(err)=>{
        if(err) return console.log(err);
        console.log('Query exeuted successfully');
    })
})

module.exports=connection;
