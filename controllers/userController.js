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
        monile: mobile,
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
    const { username, password } = req.body;
    if (!username) {
        res.send({ aysuhi: "002", message: "Username can not be null" })
    }

    if (!password) {
        return res.send({ aysuhi: "002", message: "Password can not be null" })
    }

    const query = await User.findOne({ username: username })

    if (!query) {
        return res.send({ aysuhi: "002", message: "Username doesnot exist" })
    }

    if (query.password !== password) {
        return res.send({ status: "002", message: "Incorrect password" })
    }

    const payload = {
        id: query._id,
        username: query.username
    }


    //token generate
    var token = jwt.sign(payload, privateKey);

    const dbusername = query.username;

    //update in database
    await User.updateOne({ dbusername: username }, { token: token })

    //to send token to frontend

    res.send({ staus: "001", message: "Login successful", token })



}


module.exports = { registerUser, getAllusers, login };