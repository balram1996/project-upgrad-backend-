const express = require("express");

const router = express.Router();

const User = require("../models/user.model");


router.get("/create", function (req, res) {
  res.render("products/homepage", {
    
  });
});

router.post("", async function (req, res) {
  console.log("request here", req.body);
  const user = await User.create(req.body);

  return res.send(user);
});

router.get("", async function (req, res) {
  const users = await User.find().lean().exec();
  const pageTitle = "Welcome to Users page";

  // return res.send(users);
  return res.render("users/allUsers", {
    users: users,
    pageTitle,
  });
});

module.exports = router;
