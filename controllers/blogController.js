const Blog = require('../models/blogModel');



const addBlog = async (req, res) => {
    const { user_id, title, content, author, tags } = req.body
    await Blog.create({
        user_id:user_id,
        title: title,
        content: content,
        author: author,
        tags: tags
    })

    res.send({status:"001", message:"Blog posted successfully."})

}


module.exports = {addBlog};