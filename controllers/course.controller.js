const express = require("express");

const router = express.Router();

const Course = require("../models/course.model");



router.get("/home", function (req, res) {
  return res.render("products/homepage");
});

module.exports = router;