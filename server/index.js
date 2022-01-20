"use strict";

const express = require("express");
const User = require("./Models/users");
const Post = require("./Models/post");
const Produs = require("./Models/produs");
const sequelize = require('./sequelize')
require("./Models/users")
require("./Models/post")
require("./Models/produs")
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());
// Definire realtie one to many
User.hasMany(Post);
User.hasMany(Produs);
// Utilizare rute din ./routes/users.js
app.use("/api", require("./routes/users"));
app.use("/api2", require("./routes/produs"));
// Pornire server
app.listen(3000, async() => {
    console.log("Server started on http://localhost:3000");
    try {
        await sequelize.authenticate();
        console.log("Connection has been established successfully!");
    } catch (err) {
        console.error("Unable to connect to database: ", err);
    }
});