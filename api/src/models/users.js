const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { encryptData } = require("../helpers/functions");

const UserSchema = new Schema(
  {
    numberId: {
      type: String,
      trim: true,
      unique: true,
      required: true,
    },

    name: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      trim: true,
      unique: true,
      required: true,
    },

    password: {
      type: String,
    },

    dateOfBirth: {
      type: Date,
    },

    gender: {
      type: String,
      enum: {
        values: ["Male", "Female"],
        message: "{VALUE} is not supported",
      },
    },

    age: {
      type: Number,
      min: [18, "Must be at least 18, got {VALUE}"],
      max: [100, "Must be less than 100, got {VALUE}"],
    },
  },
  {
    timestamps: {
      // ? Or just set true for createAt and updateAt
      createdAt: "created_at",
    },
  }
);

UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }

  // *! Validate if error in encryption
  this.password = await encryptData(this.password);
  next();
});

const User = mongoose.model("User", UserSchema);
module.exports = User;
