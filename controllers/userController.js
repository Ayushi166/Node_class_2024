const User = require("../models/userModel")
const jwt = require('jsonwebtoken')
const privateKey = 'erhjgfwerhfrhfihfrwehffwh'

//create
const registerUser = async (req, res) => {
    const { username, password, jobTitle, mobile, status } = req.body;
    await User.create({
        username: username,
        password: password,
        jobTitle: jobTitle,
        mobile: mobile,
        status: status,
    })

    res.send({ status: "001", msg: "User registered successfully" })
}

//read all
const getAllusers = async (req, res) => {
    const all_users = await User.find({})
    console.log();
    res.send({ status: '001', all_users })
}


//login
const login = async (req, res) => {

   // data coming from frontend
    const { username, password } = req.body;

    //validations
    if (!username) {
        res.send({ status: "002", message: "Username can not be null" })
    }

    if (!password) {
        return res.send({ status: "002", message: "Password can not be null" })
    }

    //check the username exist in the database or not
    const query = await User.findOne({ username: username })

   // if user doesnot exist in the DB
    if (!query) {
        return res.send({ status: "002", message: "Username doesnot exist" })
    }

    //if passwords do not match
    if (query.password !== password) {
        return res.send({ status: "002", message: "Incorrect password" })
    }

    //if passwords match
    const payload = {
        id: query._id,
        username: query.username
    }


    //1. token generate
    var token = jwt.sign(payload, privateKey);

    
    //update in database
    await User.updateOne({ username: username }, { token: token })

    //to send token to frontend
    res.send({ staus: "001", message: "Login successful", token })

}


module.exports = { registerUser, getAllusers, login };