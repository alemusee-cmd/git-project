const express = require("express");
const connectDB = require("./config/db");
require("dotenv").config();

const usersRoutes = require("./routes/users");

const app = express();

app.use(express.json());

connectDB();

app.get("/", (req, res) => {
  res.send("welcome to our users management app.");
});

const port = 3000;
app.use("/api/users", usersRoutes);
app.use("/id/user", usersRoutes);

app.listen(port, () => {
  console.log(`app is running on port!!!!! ${port}`);
});
