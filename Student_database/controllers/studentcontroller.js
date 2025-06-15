const db=require('../dataBase/db');
const Student=require('../models/students');
const IdentityCard=require('../models/IdentityCard');
const IDCard = require('../models/IdentityCard');
const adduser=async(req,res)=>{

    try {
    const {name,email,age}=req.body;
    if(!name||!email||!age){
        res.status(500).send(`Enter all the values`);
    }
    const insertVal=await Student.create({
        name:name,
        email:email,
        age:age
    });

    res.status(201).send(`the user ${name} is added to database`);
    } catch (error) {
        res.status(500).send(error);
    }


    // const {name,email,age}=req.body;
    // if(!name || !email || !age){
    //    return res.status(404).send('Enter the all values');
    // }

    // const insertQuery=`INSERT INTO students (name,email,age) VALUES (?,?,?)`
    // db.execute(insertQuery,[name,email,age],(err)=>{
    //     if(err) return res.status(500).send(err);
    //     console.log('Query executed successfuly');
    //     res.status(200).send(`New user ${name} has added to database`);
    // })
}


const addUserWithTheIDCardNumber=async(req,res)=>{
    try {
        const student=await Student.create(req.body.student);
        const IdentityCard=await IDCard.create({
            ...req.body.IDCard,
            StudentId:student.id
        })

        res.status(201).json({student,IdentityCard});
    } catch (error) {
        res.status(500).json({error:error.message});
    }
}

const getuser=async(req,res)=>{

    try {
        const id=req.query.id;
        const condition={};
        if(id){
            condition.id=id;
        }
        const selectusers=await Student.findAll({
            where:condition
        });

        if(selectusers.length===0){
            return res.status(200).send(`No records have been found`);
        }
        
        res.status(200).send(selectusers);

    } catch (error) {
        res.status(500).send(error);
    }

    // const id=req.query.id;
    // let selectQuery=`SELECT * FROM students`
    // const val=[]
    // if(id){
    //     selectQuery+=` WHERE id = ?`
    //     val.push(id);
    // }
    // db.execute(selectQuery,val,(err,result)=>{
    //     if(err) return res.status(500).send(err);
    //     console.log('Query executed successfully');
    //     if(result.length===0){
    //         return res.status(200).send('No records found');
    //     }
    //     res.status(200).send(result)
    // })

}

const updateuser=async (req,res)=>{
    try {
    const id=req.params.id;
    const {name,email,age}=req.body;
    const condition={};
    if(name){
        condition.name=name;
    }
    if(email){
        condition.email=email;
    }
    if(age){
        condition.age=age;
    }

    const updatevalue=await Student.update(condition,{
        where:{
            id:id
        }
    })

    if(updatevalue[0]===0){
        return res.status(200).send(`No records have been changed`);
    }
    
    res.status(200).send(`Update Query is performed successfully`);
    } catch (error) {
        res.status(500).send(error);
    }
    

    // const id=req.params.id;
    // const {name,email,age}=req.body;

    // const arr=[]
    // let updateQuerry=`UPDATE students SET `
    // if(name){
    //     updateQuerry+=`name=? `
    //     arr.push(name);
    // }
    // if(email){
    //     if(name){
    //         updateQuerry+= ` ,`
    //     }
    //     updateQuerry+=`email=?`
    //     arr.push(email);
    // }
    // if(age){
    //     if(name || email){
    //         updateQuerry+= ` ,`
    //     }
    //     updateQuerry+=`age=?`
    //     arr.push(age);
    // }
    // updateQuerry+=` WHERE id = ?`
    // arr.push(id);

    // db.execute(updateQuerry,arr,(err)=>{
    //     if(err) return res.status(500).send(err);
    //     console.log('Query executed successfully');
    //     res.status(200).send(`the values has been updated for ${id}`);
    // })

}

const deleteuser=async(req,res)=>{
    try {
        const id=req.params.id;
        const deletevalue=await Student.destroy({
            where:{
                id:id
            }
        })

        if(deletevalue[0]===0){
            res.status(404).send(`No records found on user id ${id}`);
        }
        res.status(200).send(`User has been deleted successfully`);
    } catch (error) {
        res.status(500).send('error');
    }
    // const id=req.params.id;

    // const deleteQuery=`DELETE FROM students WHERE id = ?`;
    // db.execute(deleteQuery,[id],(err,result)=>{
    //     if(err) return res.status(404).send(err);
    //     console.log('Query executed successfully');
    //     if(result.affectedRows===0){
    //         return res.status(404).send(`No user found in ${id}`);
    //     }
    //     res.status(200).send('row deleted successfully');
    // })

}

module.exports={
    adduser,
    getuser,
    updateuser,
    deleteuser,
    addUserWithTheIDCardNumber
};