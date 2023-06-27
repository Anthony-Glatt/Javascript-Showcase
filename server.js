const express = require("express");
const path = require("path");

const app = express();
const port = 3000;

app.use("/static", express.static(path.resolve(__dirname, "frontend", "static" )));

// Start with node server.js
app.get("/*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "frontend", "index.html"));
});

app.listen(port, () => console.log("serving running"));