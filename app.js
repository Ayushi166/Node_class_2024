const express = require('express');
const app = express();
const connectMongo = require('./config/configMongo');
const userRoute = require('./routes/userRoute');
const url = "mongodb://localhost:27017/firstProject"
const blogRoute = require('./routes/blogRoute');


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


connectMongo(url)
.then(()=>console.log(`Mongo Db Connected`))
.catch((err)=>{
    console.log(err);
})

app.use(userRoute);
app.use(blogRoute);


app.listen('8000', ()=>{
    console.log(`Server is running on port : 8000`);
})