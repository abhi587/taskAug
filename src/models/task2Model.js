const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
    element : [{
        type : String,
        required : [true,"Name is required"]
    }]
},{timestamps: true})


module.exports = mongoose.model("data",dataSchema);