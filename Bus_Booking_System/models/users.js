const {Sequelize,DataTypes}=require('sequelize');

const db=require('../Create_DataBase_Querys/dataBase');

    const user=db.define('users',{
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false
    }
    
});
console.log('User table is created successfully')

module.exports=user;
