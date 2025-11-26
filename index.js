// index.js
const express = require("express");
const cors = require("cors");
require("dotenv").config();

require("./db-connect");
const Router = require("./routes/index");

const app = express();

// CORS
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(express.json());

// API Routes
app.use("/api", Router);

const path = require("path");

// STATIC FILES (React build)
app.use(express.static(path.join(__dirname, "dist")));
app.use("/public", express.static(path.join(__dirname, "public")));

// ⭐ EXPESS v5 DOES NOT SUPPORT app.get("*")
// So use app.use() fallback
app.use((req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

// ❗ PORT FIX
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
