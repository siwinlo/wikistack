const express = require("express");
const wikiRouter = express.Router();

wikiRouter.get("/", (req, res, next) => {
  console.log("get ran!");
  res.send("get ran!");
});

wikiRouter.post("/", (req, res, next) => {
  res.send("post works!");
});

wikiRouter.get("/add", (req, res, next) => {
  res.send("/add router works!");
});

module.exports = wikiRouter;
