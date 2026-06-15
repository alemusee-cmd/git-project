const express = require("express");
const cors = require("cors");
const path = require("path");

// 1. טעינת משתני הסביבה (באופן אבסולוטי כדי שלא יקרוס בקודספייס)
require("dotenv").config({ path: path.join(__dirname, ".env") });

const connectDB = require("./config/db");
const app = express();

// 2. תיקון נתיב ה-Routes (ודאו שהקובץ בתוך routes אכן נקרא worker.js)
const workersRouter = require("./routes/worker");

// 3. הגדרת הגדרות יסוד (Middleware) - חייב לבוא לפני הראוטים!
app.use(express.json());
app.use(
  cors({
    origin: "http://127.0.0.1:5500",
  }),
);

// 4. הגדרת הראוטים של האפליקציה (תוקן שם המשתנה ל-workersRouter)
app.get("/", (req, res) => {
  res.send("welcome to our users management app.");
});

app.use("/api/workers", workersRouter);
app.use("/id/workers", workersRouter);

// 5. הגדרת הפורט והפעלת החיבורים
const PORT = 3000;

connectDB();

// 6. הפעלת השרת בסוף הקובץ (תוקן ל-PORT באותיות גדולות)
app.listen(PORT, () => {
  console.log(`🚀 App is running on port!!!!! ${PORT}`);
});
