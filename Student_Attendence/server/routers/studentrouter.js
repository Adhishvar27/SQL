const express=require('express');
const routers=express.Router();
const studentcontroller=require('../controllors/studentcontroller');
const reportcontroller=require('../controllors/reportcontroller');

routers.get('/getstudents',studentcontroller.retrivestudents);
routers.post('/insertintostudenttable',studentcontroller.insertintostudenttable);

routers.post('/addtodatabase',studentcontroller.insertintoAttendenceTable);
routers.get('/findifexist/:date',studentcontroller.checkifthedataindatabase);

routers.get('/attendencesheet',studentcontroller.attendanceTableStudents);

routers.get('/gettingReport',reportcontroller.gettingReport);

module.exports=routers;
