const {Sequelize,DataTypes}=require('sequelize');

const sequelize=require('../dataBase/db');

const students=sequelize.define('Students',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false
    },
    age:{
        type:DataTypes.INTEGER,
        allowNull:false
    }

});

module.exports=students;
