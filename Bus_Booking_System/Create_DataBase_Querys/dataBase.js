const {Sequelize}=require('sequelize');

const sequelize=new Sequelize('bus_system','root','root',{
    host:'localhost',
    dialect:'mysql'
});

(async ()=>{try {
    await sequelize.authenticate();
    console.log('connection made successfully');
} catch (error) {
    console.log(error);    
}})();

module.exports=sequelize;




// const mysql=require('mysql2');

// const connection=mysql.createConnection({
//     host:'localhost',
//     user:'root',
//     password:'root',
//     database:'bus_system'
// });

// connection.connect((err)=>{
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log('connection made successfully');

//     const createQuery1=`create table IF NOT EXISTS users(
//     id INT AUTO_INCREMENT PRIMARY KEY,
//     name VARCHAR(50),
//     email VARCHAR(50)
//     )`

//     const createQuery2=`create table IF NOT EXISTS buses(
//     id INT AUTO_INCREMENT PRIMARY KEY,
//     busNumber VARCHAR(10),
//     totalSeats INT,
//     availableSeats INT
//     )`

//     const createQuery3=`create table IF NOT EXISTS booking(
//     id INT PRIMARY KEY,
//     seatNumber VARCHAR(5)
//     )`

//     const createQuery4=`create table IF NOT EXISTS payments(
//     id INT PRIMARY KEY,
//     amountPaid INT,
//     paymentStatus VARCHAR(10)
//     )`

//     connection.query(createQuery1,(err)=>{
//         if(err){
//            return console.log('Error in Query 1 : ',err);
//         }
//         console.log('User table is created');

//         connection.query(createQuery2,(err)=>{
//             if(err) return console.log('Error in query 2 : ', err);
//             console.log('Buses table is created');

//                 connection.query(createQuery3,(err)=>{
//                     if(err) return console.log('Error in Query 3 : ', err);
//                     console.log('Booking table is created');

//                         connection.query(createQuery4,(err)=>{
//                             if(err) return console.log('Error in Query 4 : ', err);
//                             console.log('Payment table is created');
//                         })
//                 })
//         })
//     })

// })

// module.exports=connection;