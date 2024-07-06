const mongoose = require("mongoose");
//Defining the character's features
const chracterSchema = new mongoose.Schema({
    name:{type:String, required: true},
    gender:{type:String, required: true, lowercase:true},
    strength:{type:Number, default:0},
    level:{type:Number, default:1}},
    { versionKey: false }

);

module.exports = mongoose.model("characters",chracterSchema);