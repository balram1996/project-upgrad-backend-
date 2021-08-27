const mongoose = require("mongoose");

const amritaLoginSchema = new mongoose.Schema(
  {
    email: { type: String, required: true },
    password: {type:String, required:true}
    
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Amritalogin = mongoose.model("amritalogin",amritaLoginSchema );

module.exports = Amritalogin;
