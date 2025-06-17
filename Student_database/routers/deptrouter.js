const express=require('express');
const router=express.Router();

const deptcontroller=require('../controllers/deptcontroller');
router.post('/adddept',deptcontroller.adddept);

module.exports=router;