const express = require("express");

const app = express();

// Basic route
app.get("/", (req, res) => {
  res.status(200).json({
    status: "success",
    message: "Connected",
  });
});

// Health route
app.get("/health", (req, res) => {
  res.status(200).json({
    status: "ok",
  });
});

module.exports = app;
