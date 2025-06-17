const {Sequelize,DataTypes}=require('sequelize');

const db=require('../Create_DataBase_Querys/dataBase');

const booking=db.define('booking',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    seatNumber:{
        type:DataTypes.STRING,
        allowNull:false
    }
})

console.log('Booking table is created successfully');

module.exports=booking;