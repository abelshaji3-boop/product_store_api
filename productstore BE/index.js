const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();

app.use(cors());

// Home Route

app.get("/", (req, res) => {
  res.send("Backend Working");
});

// Products Route

app.get("/products", async (req, res) => {
  try {
    const response = await axios.get(
      "https://dummyjson.com/products"
    );

    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch products",
      error: error.message,
    });
  }
});

// Server

app.listen(3000, () => {
  console.log("Server Running on Port 3000");
});