const mongoose = require('mongoose')

const Scheeema =  new mongoose.Schema({
    username : {
        type : String,
    
    },

    email: {
        type : String,
        required : true,
        unique : true,
       
    },

    password: {
        type: String,
        required : true

    }

}, {timestamps: true})



const Usrmod = mongoose.model('shop_user', Scheeema)
module.exports = Usrmod