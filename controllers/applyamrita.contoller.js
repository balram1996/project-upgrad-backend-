const express = require("express");

const router = express.Router();

const Applyamrita = require("../models/applyamrita.model");



router.get("/users", function (req, res) {
  return res.render("products/applyamrita");
});

module.exports = router;