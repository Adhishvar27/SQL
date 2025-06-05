const db=require('../utils/db_connection');

const addToDB=(req,res)=>{
    const {name, email}=req.body;
    const insertQuery=`INSERT INTO students (name,email) VALUES (?,?)`;

    db.execute(insertQuery,[name,email],(err)=>{
        if(err){
            console.log(err);
            res.status(500).send(err.message);
            db.end();
            return;
        }
        console.log('values has been inserted in the student table');
        res.status(200).send(`The student ${name} has been added to the database`);
    })
}

const toUpdate=(req,res)=>{
    const id=req.params.id
    const {name,email}=req.body;
    if(!name && !email){
        return res.status(400).send('Nothing to update');
    }
    let updateQuery=`UPDATE students SET `
    const updateValues=[];

    if(name){
        updateQuery+='name = ? ';
        updateValues.push(name);
    }
    if(email){
        if(name){
            updateQuery+=', '
        }
        updateQuery+='email = ? '
        updateValues.push(email);
    }

    updateQuery+='where id = ? '
    updateValues.push(id);

    db.execute(updateQuery,updateValues,(err)=>{
        if(err){
            console.log(err);
            return res.status(500).send(err.message);
        }
        console.log('student with id ${id} has been updated');
        res.status(200).send('The students details has been updated');
    })
}

const todelete=(req,res)=>{
    const id=req.params.id;

    const deleteQuery=`delete from students where id = ?`

    db.execute(deleteQuery,[id],(err,result)=>{
        if(err){
           console.log(err);
           return res.status(500).send(err.message);
        }
        if(result.affectedrows==0){
            return res.status(404).send('User Not Found');
        }
        res.status(200).send('student has been deleted from the database');
    })
}

module.exports={
    addToDB,
    toUpdate,
    todelete
};
