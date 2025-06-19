const {Sequelize}=require('sequelize');

const sequelize=new Sequelize('expense_tracker','root','root',{
    host:'localhost',
    dialect:'mysql'
});

(async ()=>{try {
    await sequelize.authenticate();
    console.log('connection is successfully');
} catch (error) {
    console.log(error);
}})();

module.exports=sequelize;
