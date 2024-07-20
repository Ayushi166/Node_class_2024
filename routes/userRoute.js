const express = require('express');
const {registerUser, getAllusers, login} = require('../controllers/userController');
const userRoute = express.Router();



userRoute.post('/register', registerUser)
userRoute.get('/get',getAllusers)
userRoute.post('/login',login)




module.exports = userRoute;