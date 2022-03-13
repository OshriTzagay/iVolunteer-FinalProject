const mongoose = require("mongoose");

const VolunteersPosts = new mongoose.Schema(
  {
    FirstName: { type: String, required: true },

    LastName: { type: String, required: true },

    Email: { type: String, required: true, unique: true },

    Age: { type: Number },

    Skills: { type: String },

    // HasTaken: { type: Boolean, default: false }, //!Should we put this ???

    Language: { type: String },

    City: { type: String },

    StartHour: { type: Number },

    FinishHour: { type: Number },

    Description: { type: String },

    ProfilePic: { type: String },

    Phone: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("VolunteerPost", VolunteersPosts);
