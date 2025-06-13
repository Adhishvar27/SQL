const e = require('express');
const db=require('../database/database');
const table=require('../models/appointment');
const { combineTableNames } = require('sequelize/lib/utils');
const adddata=async (req,res)=>{
    try {
        const {name,email,phone}=req.body;
        if(!name||!email||!phone){
            res.status(400).json('Enter all details');
        }
        const inserUser= await table.create({
            name:name,
            email:email,
            phone:phone
        });
        res.status(201).json(inserUser,{
            Message:'User added to the dataBase'
        })
    } catch (error) {
        res.status(500).json({
            Message:error
        })
    }

    // console.log("Request body:", req.body); 
    // const{name,phone,email}=req.body;
    // const user={
    //     name:name,
    //     email:email,
    //     phone:phone
    // };

    // userdeatails.push(user);

    // res.status(201).json(userdeatails);
}

const getuser= async (req,res)=>{

    const selectusers=await table.findAll();
    res.status(200).json(selectusers);

   // res.status(200).json(userdeatails);
}

const updateUser=async(req,res)=>{
    try {
    const id=parseInt(req.params.id);
    const{name,email,phone}=req.body;
    const condition={};
    condition.name=name;
    condition.email=email;
    condition.phone=phone;

    const updateQuery=await table.update(condition,{
        where:{
            id:id
        }
    });

    res.status(201).json({
        Message:'Updated successfully',
        UpdatedUser:updateQuery
    })
    } catch (error) {
        res.status(404).json('user not found');
    }

    // const id=parseInt(req.params.id);
    // const {name,email,phone}=req.body;

    // userdeatails[id]={name,email,phone};
    // res.status(201).json({
    //     Message:'user updated successfully',
    //     updateUser:userdeatails[id],
    //     allUsers:userdeatails
    // });
}

const deleteUser=async(req,res)=>{
    try {
        const id=parseInt(req.params.id);
        const deleteUser=await table.destroy({
            where:{
                id:id
            }
        });
        res.status(200).json({
            Message:'User deleted successfully',
            deleteUser:deleteUser
        })
        
    } catch (error) {
        
    }
    // const id=parseInt(req.params.id);
    // if(id>=0 && id <userdeatails.length){
    //      userdeatails.splice(id,1);
    //      res.status(200).json({
    //         Message:'User deleted successfully',
    //         updateList:userdeatails
    //      });
    // }
    // else{
    //     res.status(404).json('user not found');
    // }
}

module.exports={
    adddata,
    getuser,
    updateUser,
    deleteUser
}