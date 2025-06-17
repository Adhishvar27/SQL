const Courses=require('../models/courses');
const Student=require('../models/students');
const db=require('../dataBase/db');

const addcourses=async (req,res)=>{
    try {
        const {name}=req.body;
    if(!name){
        return res.status(500).json('Enter the course name');
    }
    const insertValue=await Courses.create({"name":name});
    res.status(201).json(insertValue);
    } catch (error) {
        res.status(500).json({error:error.message});
    }
}

const addcoursetostudentcourses=async(req,res)=>{
    // {
    //     "studentId":1,
    //     "coursesId":[1,2]
    // }
    try {
        const {studentId,coursesId}=req.body;
        const student=await Student.findByPk(studentId);
        const courses=await Courses.findAll({
            where:{
                id:coursesId
            }
        });

        await student.addCourses(courses);
        const updatedStudent=await Student.findByPk(studentId,{include:Courses});
        res.status(200).json(updatedStudent);
    } catch (error) {
        res.status(500).json({error:error.message});
    }
}
module.exports={addcourses,
    addcoursetostudentcourses
};