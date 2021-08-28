const mongoose = require("mongoose");

const videoSchema = new mongoose.Schema(
  {
    video: { type: Number, required: true },
    
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Video = mongoose.model("videopage",videoSchema );

module.exports = Video;
