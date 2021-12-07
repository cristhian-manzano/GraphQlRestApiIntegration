const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      default: Number,
    },

    dateOfBirth: {
      type: Date,
      default: Date.now,
    },

    gender: {
      type: String,
    },

    age: {
      type: Number,
    },
  },
  {
    timestamps: {
      createdAt: "created_at",
    },
  }
);

const User = mongoose.model("User", UserSchema);
module.exports = User;
