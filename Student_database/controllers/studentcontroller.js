const db=require('../dataBase/db');
const adduser=(req,res)=>{
    const {name,email,age}=req.body;
    if(!name || !email || !age){
       return res.status(404).send('Enter the all values');
    }

    const insertQuery=`INSERT INTO students (name,email,age) VALUES (?,?,?)`
    db.execute(insertQuery,[name,email,age],(err)=>{
        if(err) return res.status(500).send(err);
        console.log('Query executed successfuly');
        res.status(200).send(`New user ${name} has added to database`);
    })
}

const getuser=(req,res)=>{
    const id=req.query.id;
    
    let selectQuery=`SELECT * FROM students`
    const val=[]
    if(id){
        selectQuery+=` WHERE id = ?`
        val.push(id);
    }
    db.execute(selectQuery,val,(err,result)=>{
        if(err) return res.status(500).send(err);
        console.log('Query executed successfully');
        if(result.length===0){
            return res.status(200).send('No records found');
        }
        res.status(200).send(result)
    })

}

const updateuser=(req,res)=>{
    const id=req.params.id;
    const {name,email,age}=req.body;

    const arr=[]
    let updateQuerry=`UPDATE students SET `
    if(name){
        updateQuerry+=`name=? `
        arr.push(name);
    }
    if(email){
        if(name){
            updateQuerry+= ` ,`
        }
        updateQuerry+=`email=?`
        arr.push(email);
    }
    if(age){
        if(name || email){
            updateQuerry+= ` ,`
        }
        updateQuerry+=`age=?`
        arr.push(age);
    }
    updateQuerry+=` WHERE id = ?`
    arr.push(id);

    db.execute(updateQuerry,arr,(err)=>{
        if(err) return res.status(500).send(err);
        console.log('Query executed successfully');
        res.status(200).send(`the values has been updated for ${id}`);
    })

}

const deleteuser=(req,res)=>{
    const id=req.params.id;

    const deleteQuery=`DELETE FROM students WHERE id = ?`;
    db.execute(deleteQuery,[id],(err,result)=>{
        if(err) return res.status(404).send(err);
        console.log('Query executed successfully');
        if(result.affectedRows===0){
            return res.status(404).send(`No user found in ${id}`);
        }
        res.status(200).send('row deleted successfully');
    })

}

module.exports={
    adduser,
    getuser,
    updateuser,
    deleteuser
};
