const db=require('../Database/db');
const Expense=require('../models/expense');

const addexpense=async (req,res)=>{
    try {
        const {amount,category,description}=req.body;
        const insertValue=await Expense.create({
            amount:amount,
            category:category,
            description:description
        });
        res.status(201).json(insertValue,{message:'Inserted seccessfully'});
    } catch (error) {
        res.status(500).json({error:error.message});
    }
}

const getexpenses=async (req,res)=>{
    try {
        const selectExpense=await Expense.findAll();
        res.status(200).json(selectExpense);
    } catch (error) {
        res.status(500).json({error:error.message});
    }
}

const deleteExpense=async(req,res)=>{
    try {
        const id=parseInt(req.params.id);
        const delElement=await Expense.destroy({
            where:{
                id:id
            }
        });
        res.status(200).json(delElement,{message:'user has been deleted'});
    } catch (error) {
        res.status(500).json({error:error.message});
    }
}

const updateExpense=async(req,res)=>{
    try {
        const id=parseInt(req.params.id);
        const {amount,category,description}=req.body;
        const condition={};
        condition.amount=amount;
        condition.category=category;
        condition.description=description;

        const updatevalue=await Expense.update(condition,{
            where:{
                id:id
            }
        });
        res.status(201).json(updatevalue,{message:'Updated successfully'});
    } catch (error) {
        res.status(500).json({error:error.message});
    }
}
module.exports={
    addexpense,
    getexpenses,
    deleteExpense,
    updateExpense
}
