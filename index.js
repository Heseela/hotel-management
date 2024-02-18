const express = require("express"); //commonjs way
const dotenv = require("dotenv").config();
const sequelize=require('./db.js')
const bodyParser = require('body-parser')
const User=require("./models/user.js");

const app= express();
const port= process.env.PORT || 5000 ;
app.get('/', (req,res)=>{
    res.send("Welcome to Our Hotel")
})

try{
    sequelize.authenticate();
    console.log('Connection has been established successfully.');
    app.listen(port, ()=>{
        console.log(`Server is running on port ${port}`)
    })
}catch(error){
    console.log('Unable to connect to the database:',error);
}
