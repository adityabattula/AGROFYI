const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get("/",(req,res)=>res.sendFile(__dirname+"/home.html"));

app.listen(8000,(req,res)=>console.log("The server is running on Port 8000"));