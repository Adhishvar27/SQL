const{Sequelize,DataTypes}=require('sequelize');
const db=require('../database/attendence');

const createTable=db.define('students',{
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false
    }
});

module.exports=createTable;