const mongoose = require("mongoose");

const abroadSchema = new mongoose.Schema(
  {
    email: { type: String, required: true },
    password: {type:String, required:true}
    
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Abroad = mongoose.model("abroad",abroadSchema );

module.exports = Abroad;
