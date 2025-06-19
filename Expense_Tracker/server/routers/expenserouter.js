const express=require('express');
const routers=express.Router();

const expensecontroller=require('../controllers/expensecontroller');
routers.post('/addexpense',expensecontroller.addexpense);
routers.get('/getValues',expensecontroller.getexpenses);
routers.delete('/deleteValue/:id',expensecontroller.deleteExpense);
routers.put('/updateExpense/:id',expensecontroller.updateExpense);


module.exports=routers;
