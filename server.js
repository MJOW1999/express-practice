const express = require("express");

const server = express();

const home = require("./routes/home.js");

server.get("/", home.get);

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));