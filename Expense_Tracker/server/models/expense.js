const {Sequelize,DataTypes}=require('sequelize');
const db=require('../Database/db');

const expense=db.define('expense',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    amount:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    category:{
        type:DataTypes.STRING,
        allowNull:false
    },
    description:{
        type:DataTypes.STRING,
        allowNull:false
    }
});

module.exports=expense;
