const db=require('../dataBase/db');
const department=require('../models/department');

const adddept=async(req,res)=>{
    try {
        const {id,dept}=req.body;
        if(!dept){
            return res.status(500).json("good");
        }
        const insertdept=await department.create({
            id:id,
            dept:dept
        });

        res.status(200).json(`the department has been added to the database`);
    } catch (error) {
        res.status(500).json({error:error.message});
    }
}

module.exports={
    adddept
};