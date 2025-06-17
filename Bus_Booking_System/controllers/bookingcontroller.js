const Users=require('../models/users');
const Bus=require('../models/bus');
const Booking=require('../models/booking');

const addbooking=async (req,res)=>{
    try {
        const {userid,busid,seatnumber}=req.body;
        const user=await Users.findByPk(userid);
        if(!user){
            return res.status(404).json('User not found');
        }
        const bus=await Bus.findByPk(busid);
        if(!bus){
            return res.status(404).json('Bus not found');
        }
        if(seatnumber>bus.availableSeats){
            return res.status(500).json('there are no extra available seats check the seat number correctlly');
        }
        const newSeats=bus.availableSeats-seatnumber;
        const updatedAvailableSeats=await Bus.update({
            availableSeats:newSeats
        },{
            where:{
                id:busid
            }
        });

        const insertintobooking=await Booking.create({
            seatNumber:seatnumber,
            userId:userid,
            busId:busid
        });

        res.status(201).json({
            message:"booking successfully",
            booking:insertintobooking,
            remainingSeats:newSeats
        });

    } catch (error) {
        console.error(error); 
        res.status(500).json({error:error.message});
    }
}

module.exports={
    addbooking
};