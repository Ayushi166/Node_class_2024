const express = require('express');
const { addBlog } = require('../controllers/blogController');
const blogRoute = express.Router();
const multer = require('multer');
const validateUser = require('../utils/validateUser');
const upload = multer()



blogRoute.post('/addblog', validateUser ,addBlog);


module.exports = blogRoute;