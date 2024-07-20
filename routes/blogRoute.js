const express = require('express');
const { addBlog } = require('../controllers/blogController');
const blogRoute = express.Router();



blogRoute.post('/addblog',addBlog);


module.exports = blogRoute;