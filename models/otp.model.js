const mongoose = require("mongoose");

const otpSchema = new mongoose.Schema(
  {
    otp: { type: Number, required: true },
    
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Otp = mongoose.model("applyAmrita",applyAmritaSchema );

module.exports = Otp;
