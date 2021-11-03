const express = require("express");
const app = express();
const path = require("path");
app.use(express.static(path.join(__dirname, "/public")));
app.listen(3000, () => console.log("El server esta funcionando"));
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/views/home.html"));
});
app.get("/register", (req, res) => {
  res.sendFile(path.join(__dirname, "/views/register.html"));
});
app.get("/ingresa", (req, res) => {
  res.sendFile(path.join(__dirname, "/views/login.html"));
});
