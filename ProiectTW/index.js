"use strict";

const express = require("express");
const User = require("./Models/users");
const Post = require("./Models/post");
const sequelize = require('./sequelize')
require("./Models/users")
require("./Models/post")
const app = express();

app.use(express.json());
// Definire realtie one to many
User.hasMany(Post);
// Utilizare rute din ./routes/users.js
app.use("/api",require("./routes/users"));
// Pornire server
app.listen(7000,async  () =>{
    console.log("Server started on http://localhost:7000");
    try{
        await sequelize.authenticate();
        console.log("Connection has been established successfully!");
    }
    catch(err){
        console.error("Unable to connect to database: " , err);
    }
});