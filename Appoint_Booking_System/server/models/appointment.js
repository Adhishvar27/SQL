const {Sequelize,DataTypes}=require('sequelize');
const db=require('../database/database');

const appoinment=db.define('Appointment',{
    id:{
        type:DataTypes.INTEGER,
        allowNull:false,
        primaryKey:true,
        autoIncrement:true
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true
    },
    phone:{
        type:DataTypes.BIGINT,
        allowNull:false,
        unique:true 
    }
});

module.exports=appoinment;
