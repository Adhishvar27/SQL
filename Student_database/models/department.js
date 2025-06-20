const {Sequelize,DataTypes}=require('sequelize');
const db=require('../dataBase/db');

const department=db.define('department',{
    id:{
        primaryKey:true,
        allowNull:false,
        type:DataTypes.INTEGER,
    },
    dept:{
        type:DataTypes.STRING,
        allowNull:false
    }
})

module.exports=department;