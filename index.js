const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const orderRoutes = require("./routes/orderRoutes");
const userRoutes = require("./routes/userRoutes");

const app = express();

/* 🔧 MIDDLEWARE */
app.use(cors());
app.use(bodyParser.json());

/* 🔥 ENSURE DB CONNECTED BEFORE ROUTES */
app.use(async (req, res, next) => {
  try {
    await connectDB();
    next();
  } catch (err) {
    console.error("DB connection failed:", err);
    res.status(500).json({ message: "Database connection failed" });
  }
});

/* 🚀 ROUTES */
app.use("/api/auth", authRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/user", userRoutes);

/* ✅ ROOT */
app.get("/", (req, res) => {
  res.send("API is running");
});

module.exports = app;
