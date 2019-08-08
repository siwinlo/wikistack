const express = require("express");
const wikiRouter = express.Router();
const addPage = require("../views/addPage");
const main = require("../views/main");

wikiRouter.get("/", (req, res, next) => {
  res.send(main());
});

wikiRouter.post("/", (req, res, next) => {
  res.json(req.body);
});

wikiRouter.get("/add", (req, res, next) => {
  res.send(addPage());
});

module.exports = wikiRouter;
