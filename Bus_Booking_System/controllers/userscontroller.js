const db=require('../Create_DataBase_Querys/dataBase');
const UserDB=require('../models/users');

const adduser=async (req,res)=>{
    try {
        const {name,email}=req.body;
        if(!name||!email){
            return res.status(400).send('enter all details');
        }
        const insertValues=await UserDB.create({
            name:name,
            email:email
        });

        res.status(201).send('user deatails has been added to user table');
    } catch (error) {
        res.status(500).send(error);
    }
    // const {name,email}=req.body;
    // if(!name || !email){
    //     return res.status(404).send('Enter the values correctly');
    // }
    
    // const insertQuery=`INSERT INTO users (name,email) VALUES (?,?)`;

    // db.execute(insertQuery,[name,email],(err)=>{
    //     if(err) return res.status(500).send(err);
    //     console.log('Query executed successfully');
    //     res.status(200).send(`the user ${name} is added succesfully`);
    // })
}
const selectuser=async(req,res)=>{

    try {
        const selectValues=await UserDB.findAll();
        if(selectValues.length===0){
            return res.status(200).send('currently no user persent in the database');
        }
        res.status(200).send(selectValues);
    } catch (error) {
        res.status(500).send(error);
    }
    // const selectQuery=`SELECT * FROM users`
    // db.execute(selectQuery,(err,result)=>{
    //     if(err) return res.status(500).send(err);
    //     console.log('Query executed successfully');
    //     res.status(200).send(result);
    // });
}

module.exports={
    adduser,
    selectuser
};