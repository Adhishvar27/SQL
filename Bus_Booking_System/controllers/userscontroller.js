const db=require('../Create_DataBase_Querys/dataBase');

const adduser=(req,res)=>{
    const {name,email}=req.body;
    if(!name || !email){
        return res.status(404).send('Enter the values correctly');
    }
    
    const insertQuery=`INSERT INTO users (name,email) VALUES (?,?)`;

    db.execute(insertQuery,[name,email],(err)=>{
        if(err) return res.status(500).send(err);
        console.log('Query executed successfully');
        res.status(200).send(`the user ${name} is added succesfully`);
    })


}
const selectuser=(req,res)=>{
    const selectQuery=`SELECT * FROM users`
    db.execute(selectQuery,(err,result)=>{
        if(err) return res.status(500).send(err);
        console.log('Query executed successfully');
        res.status(200).send(result);
    });
}

module.exports={
    adduser,
    selectuser
};