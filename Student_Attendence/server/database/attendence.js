const {Sequelize}=require('sequelize');

const sequelize=new Sequelize('student_attendence','root','root',{
    host:'localhost',
    dialect:'mysql'
});

(async()=>{try {
    await sequelize.authenticate();
    console.log('connection is made successfully');
} catch (error) {
    console.log('error:', error);
}})();

module.exports=sequelize;
