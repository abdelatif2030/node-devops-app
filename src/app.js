const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const morgan = require("morgan");

const userRoutes = require("./routes/user.routes");

const app = express();

/**
 * =========================
 * Middlewares
 * =========================
 */
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

/**
 * =========================
 * Health Check (Kubernetes)
 * =========================
 */
app.get("/health", (req, res) => {
  res.status(200).json({
    status: "UP",
    service: "node-devops-app",
    timestamp: new Date().toISOString()
  });
});

/**
 * =========================
 * Root Route (IMPORTANT)
 * Fixes "Cannot GET /"
 * =========================
 */
app.get("/", (req, res) => {
  res.status(200).send("🚀 Node DevOps App is running successfully!");
});

/**
 * =========================
 * API Routes
 * =========================
 */
app.use("/api/users", userRoutes);

/**
 * =========================
 * 404 Handler
 * =========================
 */
app.use((req, res) => {
  res.status(404).json({
    error: "Route not found",
    path: req.originalUrl
  });
});

module.exports = app;
