const {Sequelize,DataTypes}=require('sequelize');

const db=require('../Create_DataBase_Querys/dataBase');

const payments=db.define('payments',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        allowNull:false
    },
    amountPaid:{
        type:DataTypes.INTEGER,
        allowNull:false,
    },
    paymentStatus:{
        type:DataTypes.STRING,
        allowNull:false
    }
})

console.log('Payment table is created successfully');

module.exports=payments;