const {Sequelize}=require('sequelize');

const sequelize=new Sequelize('appointment_details','root','root',{
    host:'localhost',
    dialect:'mysql'
});

(async ()=>{try {
    await sequelize.authenticate();
    console.log('connection is made successfully');
} catch (error) {
    console.log(error);
}})();

module.exports=sequelize;
