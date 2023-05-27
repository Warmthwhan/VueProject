const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let userSchema = new Schema({
    fname:{
        type:String
    },
    lname:{
        type:String
    },
    birthday:{
        type:Date
    },
    tel:{
        type:Number
    },
    address:{
        type:String
    },
    username:{
        type:String
    },
    password:{
        type:String
    }
},{
        collection:'users'
})
module.exports = mongoose.model('User',userSchema);