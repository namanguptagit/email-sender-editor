const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://naman-admin:TjG2giEHONAHxyVa@cluster0.ztz8b.mongodb.net/emaildb")

app.use("/", require("./routes/emailroutes"));

app.listen(3002, function(){
    console.log("express server running")
});