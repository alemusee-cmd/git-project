const mongoose = require("mongoose");
async function connectDB() {
  try {
    console.log(
      "LOGGING ENV FROM DB.JS:",
      process.env.DB_USER,
      process.env.DB_PASSWORD,
    );
    await mongoose.connect(
      `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster1.pgu8oqf.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`,
    );

    console.log("💥 Mongo DB connect successfully 💥");
  } catch (erorr) {
    console.error("Data DB connction failed 😢");
  }
}
module.exports = connectDB; //הפונקציה הזו זמינה לקבצים אחרים
