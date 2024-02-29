const express = require("express");
require("dotenv").config();
const cors = require("cors");
const bodyParser = require("body-parser");
const DBConnection = require('./src/config/mongoDB.js');
const routes = require("./src/routes/index.js");

const app = express();
const port = process.env.PORT || 8080;

app.use(cors());
app.use(bodyParser.json());

// Database Connection
DBConnection();

// default route
app.get("/", (req, res) => {
  res.status(200).json("Api working fine!");
});

app.use("/api", routes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
