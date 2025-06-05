const mysql=require('mysql2');

const connection=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'testdatabase'
})

connection.connect((err)=>{
    if(err) return console.log(err);
    console.log('coneection is made successfully');
    
    const createQuery=`create table IF NOT EXISTS students(
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30),
    email VARCHAR(50)
    )`

    connection.query(createQuery,(err)=>{
        if(err) return console.log('Error in creating student table : ',err);
        console.log('student table has been created');
    })

    //connection.end();
})


module.exports=connection;
