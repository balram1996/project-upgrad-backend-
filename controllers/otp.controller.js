const express = require("express");

const router = express.Router();

const Otp = require("../models/loginpage.model");



router.get("/home", function (req, res) {
  return res.render("products/otp");
});

module.exports = router;