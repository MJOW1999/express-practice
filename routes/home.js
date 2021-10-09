const db = require("../database/connection.js");

function get(request, response) {
    db.query("SELECT * FROM users").then((result) => {
      console.log(result);
    });
    response.send("<h1>Hello world</h1>");
  }