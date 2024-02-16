const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./src/config/sequelize.js');
const routes = require("./src/routes/index.js");

const app = express();
const PORT = 8080;

app.use(bodyParser.json());

app.use("/", routes);

// Sync database and start the server
sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
});