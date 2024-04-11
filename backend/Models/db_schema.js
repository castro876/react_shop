const mongoose = require('mongoose')

const Scheeema =  new mongoose.Schema({
    title : {
        type : String,
        required : true,
    
    },

    image: {
        type : String,
        required : true,
      //unique : true,
       
    },

    price: {
        type: String,
        required : true

    },

    description: {
        type: String,
        required : true

    }
}, {timestamps: true})



const Mod = mongoose.model('shop_product', Scheeema)
module.exports = Mod
