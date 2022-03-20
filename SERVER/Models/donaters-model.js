const mongoose = require("mongoose");

const Donater = new mongoose.Schema(
  {
    Name: { type: String, required: true },

    About: { type: String },

    DonateSince: { type: String },

    WhyDonate: { type: String },

    DonateSum: { type: String },

    ProfilePic: { type: String },

    
  },
  { timestamps: true }
);

module.exports = mongoose.model("Donater", Donater);
