const userModel = require("../model/usermodel");
const bcrypt = require("bcrypt");
const nodemailer = require("nodemailer");

const getUsers = (req, res) => {
  res.status(200).json({ success: true, data: "Get Users" });
};
const createUser = async (req, res) => {
  //const genSalt = await bcrypt.genSalt();
  //const myhashPassword = await bcrypt.hash(req.body.password, genSalt);
  const register = new userModel({
    name: req.body.name,
    email: req.body.email,
    //password: myhashPassword,
    subject: req.body.subject,
    message: req.body.message,
  });

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "mariimehar461@gmail.com",
      pass: "zenrleqewojkhejo",
    },
  });
  let mailOptions = {
    from: "mariimehar461@gmail.com",
    to: register.email,
    subject: "Testing",
    html: `<h3>Name:${register.name}</h3>
    <h3>Email:${register.email}</h3>
    <p>Is this Your Email?If yes then verify your Email.</p>
    <a href="/">Verify Your Email</a>`,
  };
  transporter.sendMail(mailOptions, function (err) {
    if (err) {
      console.log(`Oops!Error Occured in email ${err}`);
    } else {
      console.log(`Email send to User ${register.email}`);
    }
  });
  register
    .save()
    .then((data) => {
      res
        .status(201)
        .json({ success: true, msg: "User Created Successfully", data: data });
    })
    .catch((err) => {
      res.status(505).json({ success: false, error: err });
    });
};
module.exports = { getUsers, createUser };
