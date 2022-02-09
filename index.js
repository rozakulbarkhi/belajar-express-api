const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv");
const connection = require("./config/db");

connection();

// init app
const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// dotenv
dotenv.config();
const PORT = process.env.PORT || 6000;

// routes
app.use("/api/goals", require("./routes/goalRoute"));

// listen
app.listen(PORT, () => console.log(`Server was running on ${PORT}`));
