const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const orderRoutes = require("./routes/orderRoutes");
const userRoutes = require("./routes/userRoutes");

const app = express();

/* 🔥 CONNECT DATABASE (SAFE FOR SERVERLESS) */
connectDB();

/* 🔧 MIDDLEWARE */
app.use(cors());
app.use(bodyParser.json());

/* 🚀 ROUTES */
app.use("/api/auth", authRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/user", userRoutes);

/* ✅ ROOT TEST ROUTE */
app.get("/", (req, res) => {
  res.send("API is running");
});

/* ❗ DO NOT app.listen() ON VERCEL */
module.exports = app;
app.get("/", (req, res) => {
  res.send("API is running");
});
