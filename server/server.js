/**
 * Server
 */

const {
  TEST_MODE,
  PORT,
  URL,
  URLDB,
  USERDB,
  PASSDB,
  PORTDB,
  CLIENT
} = require("../config.js");

const express = require("express");
const server = express();
const Sequelize = require("sequelize");

// public client folder
server.use("/", express.static(CLIENT));

// database conection
const sequelize = new Sequelize(USERDB, USERDB, PASSDB, {
  dialect: 'mysql',
  host: URLDB,
  dialectOptions: {

  }
});

(async () => {
  try {
    console.log("a");
    await sequelize.authenticate();
    console.log("Connected to Database.")
  } catch (err) {
    console.log(err + "");
    //throw new Error("" + err)
  }
})();

// start server
server.listen(PORT, () => {
  if (TEST_MODE) console.log(":::TEST_MODE enabled:::");
  console.log("Client running...", URL);
});