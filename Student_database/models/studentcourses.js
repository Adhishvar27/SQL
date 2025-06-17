const {Sequelize,DataTypes}=require('sequelize');
const db=require('../dataBase/db');

const studentcourses=db.define('studentcourses',{
    id:{
        primaryKey:true,
        type:DataTypes.INTEGER,
        autoIncrement:true
    }
});

module.exports=studentcourses;