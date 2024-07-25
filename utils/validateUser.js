var jwt = require('jsonwebtoken');
const User = require('../models/userModel');
const privateKey = 'erhjgfwerhfrhfihfrwehffwh'

const validateUser = async(req,res,next)=>{
    const token = req.headers["authorization"]
    
    const newToken = token.split(" ")
    
    const frontend_token = newToken[1]
    

    var user = jwt.verify(frontend_token, privateKey);

    req.user_id = user.id

    const db_user = await User.findOne({_id:req.user_id})

    const db_token = db_user.token

    if(frontend_token !== db_token){
        return res.send({status:"002", message:"token do not match"})
    }

     next();
}


module.exports = validateUser