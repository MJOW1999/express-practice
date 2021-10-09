const db = require("../database/connection.js");

function get(request, response) {
    db.query("SELECT username FROM users").then((result) => {
      console.log(result);
      response.send(result.rows);
    });
    // response.send(result.rows);
  }

  module.exports = { get };