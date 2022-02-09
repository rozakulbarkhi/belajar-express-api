const express = require("express");

// dotenv
require("dotenv").config();
const PORT = process.env.PORT || 6000;

const app = express();

// routes
app.use("/api/goals", require("./routes/goalRoute"));

// listen
app.listen(PORT, () => console.log(`Server was running on ${PORT}`));
