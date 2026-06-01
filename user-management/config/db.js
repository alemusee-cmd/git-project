const mongoose = require("mongoose");

async function connectDB() {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster1.pgu8oqf.mongodb.net/${process.env.DB_NAME}`,
    );
    console.log("mongo DB connected successfully");
  } catch (error) {
    console.error("db connection faild");
  }
}

module.exports = connectDB;
