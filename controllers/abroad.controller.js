const express = require("express");

const router = express.Router();

const Abroad = require("../models/abroad.model");



router.get("/abroad", function (req, res) {
  return res.render("products/abroad");
});



module.exports = router;
