const {Sequelize,DataTypes}=require('sequelize');
const db=require('../dataBase/db');

const courses=db.define('courses',{
    id:{
        primaryKey:true,
        autoIncrement:true,
        type:DataTypes.INTEGER
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false
    }
});

module.exports=courses