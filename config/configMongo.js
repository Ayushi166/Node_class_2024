const mongoose = require('mongoose')

const connectMongo = (url)=>{
    return mongoose.connect(url)
}


module.exports = connectMongo;