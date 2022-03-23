const mongoose = require("mongoose");

const NeedVolPosts = new mongoose.Schema(
  {
    FirstName: { type: String, required: true },

    LastName: { type: String, required: true },

    Email: { type: String, required: true, unique: true },

    Language: { type: String, required: true },
    
    Age: { type: Number },

    City: { type: String },

    Phone: { type: String },

    HasTaken: { type: Boolean, default: false },
    
    ProfilePic: { type: String },

    Description: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("NeedVolPost", NeedVolPosts);
