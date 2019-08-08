const express = require("express");
const app = express();
const morgan = require("morgan");
const db = require("./database");
const views = require("./views");
const layout = require("./views/layout");

//logging middleware
app.use(morgan("dev"));
//serving static files from 'public' directory
app.use(express.static("public"));

//body parsing middleware
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res, next) => {
  console.log("hello world");
  res.send(layout());
});

app.listen(3000, () => console.log("App listening on Port 3000"));
