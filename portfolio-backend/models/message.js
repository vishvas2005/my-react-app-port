//creating message schema for developing email function working........................
const mongoose = require('mongoose');

const messageschema = new mongoose.Schema({
    name : {type:String ,required:true },
    email : {type:String , required:true},
    message : {type:String , required:true},
    createdAt : {type: Date , default : Date.now}
})

module.exports = mongoose.model('Message' , messageschema);

//this schema is for in this pattern user send his message and email ..