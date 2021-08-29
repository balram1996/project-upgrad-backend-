const express = require("express");

const router = express.Router();

const Course = require("../models/course.model");

const Video = require("../models/videoPage2.model")

router.get("/home", function (req, res) {
  return res.render("products/homepage");
});

router.get("/video", function (req, res) {
  return res.render("products/videoPage");
});



module.exports = router;

