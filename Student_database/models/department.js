const {Sequelize,DataTypes}=require('sequelize');
const db=require('../dataBase/db');

const department=db.define('department',{
    id:{
        primaryKey:true,
        type:DataTypes.INTEGER,
        allowNull:false
    },
    dept:{
        type:DataTypes.STRING,
        allowNull:false
    }
})

module.exports=department;