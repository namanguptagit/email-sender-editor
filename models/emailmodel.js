const mongoose = require("mongoose");
const emailschema ={
    name: String,
    rname: String,
    user_email: String,
    message: String
}

const Email = mongoose.model("Email" , emailschema);
module.exports = Email;