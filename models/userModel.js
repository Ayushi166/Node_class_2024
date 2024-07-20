const mongoose = require("mongoose");


//schema
const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique:true
    },
    password: {
        type: String,
        required: false
    },
    jobTitle: {
        type: String,
    },
    mobile: {
        type: Number
    },
    status: {
        type: Number,
        default:0,
        min: 0,
        max: 1
    },
    token: {
        type: String,
    },
});

//model
const User = mongoose.model('user', userSchema);


module.exports = User;