const mongoose =require("mongoose")
//created model for storing data into model
const primeStoreSchema=new mongoose.Schema({
    timeStamp:{type:Date,default:Date.now},
    start:Number,
    end:Number,
    algorithm:String,
    timeElapsed:Number,
    numsPrime:Number
})

const PrimeStore=mongoose.model("PrimeStore",primeStoreSchema);
module.exports = PrimeStore;