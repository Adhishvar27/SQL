const {Sequelize,DataTypes}=require('sequelize');

const db=require('../database/attendence');

const AttendenceTable=db.define('attendenceTable',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    student_id:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    date:{
        type:DataTypes.DATEONLY,
        allowNull:false,
    },
    status:{
        type:DataTypes.STRING,
        allowNull:false
    }
});

module.exports=AttendenceTable;