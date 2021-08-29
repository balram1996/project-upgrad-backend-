const express = require("express");

const path = require("path");


const connect = require("./configs/db");

const userController = require("./controllers/user.controller");
const courseController = require("./controllers/course.controller");
const applyAmritaController = require("./controllers/applyamrita.controller");
const loginPageController = require("./controllers/loginpage.controller");
const otpController = require("./controllers/otp.controller");
const amritaloginController = require("./controllers/amrita.controller");
const videoController = require("./controllers/course.controller");
const Abroad = require("./controllers/abroad.controller")

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/static", express.static(path.join(__dirname, "public")));

app.set("views", path.join(__dirname, "views/"));
app.set("view engine", "ejs");  //views

app.use("/users", userController);
app.use("/users",courseController);
app.use("/users",loginPageController);
app.use("/users",otpController);
app.use("/users",applyAmritaController);
app.use("/users",amritaloginController);
app.use("/users",videoController);
app.use("/users",Abroad);


app.listen(5000, async () => {
  await connect();
  console.log("Listening on port 5000");
});

