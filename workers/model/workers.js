const { Timestamp } = require("mongodb");
const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "user name is required"],
      trim: true,
    },

    email: {
      type: String,
      required: [true, "Email name is required"],
      unique: true,
      lowercase: true,
      trim: true,
    },

    phone: {
      type: String,
      min: [9, "tel cannot be negative"],
    },

    department: {
      type: String,
      required: [true, "department name is required"],
      trim: true,
    },
    role: {
      type: String,
      required: [true, "role name is required"],
      trim: true,
    },
  },
  { timestamps: true },
);
const workers = mongoose.model("workers", userSchema);

module.exports = workers;
