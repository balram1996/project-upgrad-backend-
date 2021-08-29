const mongoose = require("mongoose");

const applyAmritaSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Applyamrita = mongoose.model("applyAmrita",applyAmritaSchema);

module.exports = Applyamrita;
