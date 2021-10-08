const express = require ("express");
const router = express.Router();
const Email = require("../models/emailmodel");

router.route("/create").post((req,res) => {
  const name=req.body.name;
  const rname=req.body.rname;
  const user_email=req.body.user_email;
  const message=req.body.message;

  const newData= new Email({
      name,
      rname,
      user_email,
      message
  });
  newData.save();

});

router.route("/emails").get((req,res) =>{
Email.find()
  .then(foundemail => res.json(foundemail))
}
)

module.exports = router;