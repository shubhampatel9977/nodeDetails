const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const DBConnection = require('./src/config/mySqlDB.js');
const redisClient = require('./src/config/redisDB.js')
const routes = require("./src/routes/index.js");

const app = express();
const port = 8080;

app.use(cors());
app.use(bodyParser.json());

DBConnection;
redisClient;

app.use("/", routes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
