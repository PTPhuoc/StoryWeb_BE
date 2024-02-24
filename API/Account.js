const uri = require("express").Router();
const bcrypt = require("bcrypt");
const AccountModel = require("../Model/AccountModel.js");
const e = require("express");

const HashPassword = async (Password) => {
  const Hash = await bcrypt.hash(Password, 10);
  return Hash;
};

const ComparePassword = async (Password, PasswordHash) => {
  const isMath = await bcrypt.compare(Password, PasswordHash);
  return isMath;
};

uri.post("/SignUp", async (req, res) => {
  const NewAccount = new AccountModel({
    Name: req.body.Name,
    Email: req.body.Email,
    Password: await HashPassword(req.body.Password),
    DateCreate: req.body.DateCreate,
  });
  await NewAccount.save();
  res.send(NewAccount);
});

uri.post("/GetAccount", async (req, res) => {
  const Account = await AccountModel.findOne({ Email: req.body.Email });
  if (!Account || Account.length === 0) {
    res.send({ Status: "Not Found" });
  } else {
    res.send(Account);
  }
});

uri.post("/SignIn", async (req, res) => {
  const HashedPassword = await AccountModel.findOne({ Email: req.body.Email });
  if (!HashedPassword || HashedPassword.length === 0) {
    res.send({ Status: "Not Found" });
  } else {
    console.log(HashedPassword.Password)
    const isLogin = await ComparePassword(req.body.Password, HashedPassword.Password);
    if (isLogin) {
      res.send({ Status: "Success" });
    } else {
      res.send({ Status: "Fault" });
    }
  }
});

uri.post("/CheckEmail", async (req, res) => {
  const EmailNotExists = await AccountModel.find({ Email: req.body.Email });
  if (!EmailNotExists || EmailNotExists.length === 0) {
    res.send({ Status: "Success" });
  } else {
    res.send({ Status: "Fault" });
  }
});

module.exports = uri;
