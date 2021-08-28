const express = require("express");

const router = express.Router();

const Login = require("../models/loginpage.model");



router.get("/login", function (req, res) {
  return res.render("products/loginpage");
});

module.exports = router;