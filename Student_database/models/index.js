//if the name of this file is not index.js it will not be imported in the sevrver main file it will thrown an error


const Students=require('./students');
const IdentityCard=require('./IdentityCard');
const department=require('./department');
const students = require('./students');

//one to one relationship

Students.hasOne(IdentityCard);
IdentityCard.belongsTo(Students);

//one to many relationship

department.hasMany(students);
students.belongsTo(department);

module.exports={
    Students,
    IdentityCard
};