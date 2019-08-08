const express = require("express");
const wikiRouter = express.Router();
const addPage = require("../views/addPage");
const main = require("../views/main");
const { Page } = require("../models");

wikiRouter.get("/", (req, res, next) => {
  res.send(main());
});

wikiRouter.post("/", async (req, res, next) => {
  const page = new Page({
    title: req.body.title,
    content: req.body.content
  });
  try {
    console.log(page);
    await page.save();
    res.redirect("/");
  } catch (error) {
    next(error);
  }
  //res.json(req.body);
});

wikiRouter.get("/add", (req, res, next) => {
  res.send(addPage());
});

module.exports = wikiRouter;
