const mongoose = require("mongoose");

const User = new mongoose.Schema(
  {
    FirstName: { type: String, required: true },

    LastName: { type: String, required: true },

    Email: { type: String, required: true, unique: true },

    Password: { type: String, required: true },

    Age: { type: Number },

    LastLogin: { type: Date, default: Date.now },

    isLogin: { type: Boolean, default: false },

    isAdmin: { type: Boolean, default: false },

    ProfilePic: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", User);
