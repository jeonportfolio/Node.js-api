const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors())

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

const mongoURI=process.env.MONGODB_LOCAL;
mongoose.connect(mongoURI)
.then(()=>console.log("mongoose db"))
.catch((err)=> console.log("db connected fail"))

app.listen(5000,()=>console.log("server on at 5000"))