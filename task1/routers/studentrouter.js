const express=require('express');
const router=express.Router();

const studentcontroller=require('../controllors/studentcontroller');

router.post('/add',studentcontroller.addToDB);
router.put('/update/:id',studentcontroller.toUpdate);
router.delete('/delete/:id',studentcontroller.todelete)

module.exports=router;
