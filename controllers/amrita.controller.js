const express = require("express");

const router = express.Router();

const Amritalogin = require("../models/amrita.model");



router.get("/amrita", function (req, res) {
  return res.render("products/amrita");
});

module.exports = router;