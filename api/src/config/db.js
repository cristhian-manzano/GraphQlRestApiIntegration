require("dotenv").config();
const mongoose = require("mongoose");

module.exports = async () => {
  try {
    await mongoose.connect(
      process.env.MONGO_URI,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
      (e) => {
        if (e) {
          console.log("🚀 ~ file: db.js ~ line 17 ~ connectDB ~ e", e);
          return new Error("Failed to connect to database");
        }
        console.log(`Connected`);
      }
    );
  } catch (e) {
    console.error(e);
  }
};
