const {Op}=require('sequelize');
const db=require('../Create_DataBase_Querys/dataBase');
const BusDB=require('../models/bus');

const addbus=async (req,res)=>{
    try {
      const {busNumber,totalSeats,availableSeats}=req.body;
    if(!busNumber||!totalSeats||!availableSeats){
        return res.status(404).send('Enter all deatils');
    }

    const insertValue= await BusDB.create({
        busNumber:busNumber,
        totalSeats:totalSeats,
        availableSeats:availableSeats
    });   

    res.status(201).send('Values inserted into Bus table successfully')
    } catch (error) {
        res.status(500).send(error);
    }

//     const {busNumber,totalSeats,availableSeats}=req.body;
//     if(!busNumber || !totalSeats || !availableSeats){
//         return res.status(404).send('Enter all details of the bus');
//     }

//     const insertQuery=`INSERT INTO buses (busNumber,totalSeats,availableSeats) VALUES (?,?,?)`;
//     db.execute(insertQuery,[busNumber,totalSeats,availableSeats],(err)=>{
//         if(err) return res.status(500).send(err);
//         console.log('Query executed successfully');
//         res.status(200).send(`the number ${busNumber} bus is added to the DB`);
//     })
}

const retrivebus=async (req,res)=>{

    try {
        const number=parseInt(req.query.aboveseats);
        let condition={};
        if(!isNaN(number)){
            condition.availableSeats={
                [Op.gt]:number
            };
        }
        const SelectValues=await BusDB.findAll({
            where:condition
        });

        // if(SelectValues.length===0){
        //     return res.status(404).send('No records have been found');
        // }

        res.status(200).send(SelectValues);
    } catch (error) {
        res.status(500).send(error);
    }
    // const number=req.query.aboveseats;

    // let selectQuery=`SELECT * FROM buses`
    // let arr=[]; 

    // if(number){
    //     selectQuery+=` where availableSeats > ?`;
    //     arr.push(number);
    // }
    // db.execute(selectQuery,arr,(err,result)=>{
    //     if(err) return res.status(500).send(err);
    //     if(result.length===0){
    //         return res.status(200).send(`No buses avilable in ${number} seats`);
    //     }
    //     res.status(200).send(result);

    // })
}

module.exports={
    addbus,
    retrivebus
};