const express=require('express');
const router=express.Router();

const coursescontroller=require('../controllers/coursecontroller');
router.post('/addcourse',coursescontroller.addcourses);
router.get('/addstudentandcourses',coursescontroller.addcoursetostudentcourses);

module.exports=router;