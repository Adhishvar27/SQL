//if the name of this file is not index.js it will not be imported in the sevrver main file it will thrown an error


const Students=require('./students');
const IdentityCard=require('./IdentityCard');
const department=require('./department');
const courses=require('./courses');
const studentcourses=require('./studentcourses');

//one to one relationship

Students.hasOne(IdentityCard);
IdentityCard.belongsTo(Students);

//one to many relationship

department.hasMany(Students);
Students.belongsTo(department);

//many to many ralationship

Students.belongsToMany(courses,{through:studentcourses});
courses.belongsToMany(Students,{through:studentcourses});

module.exports={
    Students,
    IdentityCard,
    courses,
    studentcourses
};