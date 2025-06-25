const student=require('./student');
const attendence=require('./student_attendence');

student.hasMany(attendence,{foreignKey:'student_id'});
attendence.belongsTo(student,{foreignKey:'student_id'});

module.exports={
    student,
    attendence
};
