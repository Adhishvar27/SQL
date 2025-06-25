const db=require('../database/attendence');
const { student } = require('../moduls');
const StudentTable=require('../moduls/student');
const AttendenceTable=require('../moduls/student_attendence');

const retrivestudents=async(req,res)=>{
    try {
        const studentsnames=await StudentTable.findAll();
        res.status(200).json(studentsnames);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}

const insertintostudenttable=async(req,res)=>{
    try {
        const {name}=req.body;
        await StudentTable.create({
            name:name
        });
        res.status(201).json(`${name} student inserted successfully`);
    } catch (error) {
        console.log(error);
        res.status(500).json({error: error.message});
    }
}

const insertintoAttendenceTable=async(req,res)=>{
    try {
        const {student_id,date,status}=req.body;
        const insertAttendence=await AttendenceTable.create({
            student_id:student_id,
            date:date,
            status:status
        });
        res.status(200).json({
            attendance: insertAttendence,
            message:'value has been inserted'
        });
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}

const checkifthedataindatabase=async(req,res)=>{
    try {
        const date=req.params.date;
        const searchdata=await AttendenceTable.findAll({
            where:{
                date:date
            }
        });
        if(searchdata.length===0){
            return res.status(200).json({
                isPresentInTheDataBase:false
            })
        }
        res.status(200).json({
            isPresentInTheDataBase:true
        });
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}

const attendanceTableStudents=async (req,res)=>{
    try {
        const alldatas=await AttendenceTable.findAll({
            include: {
                model: StudentTable,
                attributes: ['name']
                }
            });

            const formatteddata=alldatas.map(entry=>({
                name:entry.student.name,
                status:entry.status,
                date:entry.date
            }));
        res.status(200).json(formatteddata);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}
module.exports={
    retrivestudents,
    insertintostudenttable,
    insertintoAttendenceTable,
    checkifthedataindatabase,
    attendanceTableStudents
}