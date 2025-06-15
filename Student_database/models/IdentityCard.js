const {Sequelize,DataTypes} = require('sequelize')
const db=require('../dataBase/db');

const IdentityCard=db.define('IdentityCard',{
    id:{
        type:DataTypes.INTEGER,
        allowNull:false,
        primaryKey:true,
        autoIncrement:true
    },
    cardNumber:{
        allowNull:false,
        type:DataTypes.BIGINT
    }
})

module.exports=IdentityCard;