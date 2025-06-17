const users=require('./users');
const buses=require('./bus');
const booking=require('./booking');

//one to many relationship

users.hasMany(booking);
booking.belongsTo(users);

buses.hasMany(booking);
booking.belongsTo(buses);

module.exports={
    users,
    buses,
    booking
};