const AttendenceTable=require('../moduls/student_attendence');
const StudentTable=require('../moduls/student');

const gettingReport=async (req,res)=>{
    try {
        const studentList=await StudentTable.findAll();
        const reports=[];
        for(const student of studentList){
            const record=await AttendenceTable.findAll({
                where:{
                    student_id:student.id
                }
            });
            const totaldays=record.length;
            const presentdays=record.filter(r=>r.status==='present').length;
            const absentdays=totaldays-presentdays;
            const averageAttendence=totaldays>0?((presentdays/totaldays)*100).toFixed(2):0.00;

            reports.push({
                name:student.name,
                totaldays,
                presentdays,
                absentdays,
                averageAttendence:`${averageAttendence}%`
            });
        }
        res.status(200).json(reports);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}

module.exports={
    gettingReport
}
