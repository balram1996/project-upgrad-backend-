const express = require("express");

const router = express.Router();

const Amritalogin = require("../models/amrita.model");



router.get("/home", function (req, res) {
  return res.render("products/amrita");
});

module.exports = router;