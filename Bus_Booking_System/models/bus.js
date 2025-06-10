const {Sequelize,DataTypes}=require('sequelize');

const db=require('../Create_DataBase_Querys/dataBase');

const buses=db.define('buses',{
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true, 
        allowNull:false
    },
    busNumber:{
        type:DataTypes.STRING,
        allowNull:false
    },
    totalSeats:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    availableSeats:{
        type:DataTypes.INTEGER,
        allowNull:false
    }
})

console.log('buses table is crested successfully');

module.exports=buses;