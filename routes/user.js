const express = require("express");
const userRouter = express.Router();

userRouter.get("/", (req, res, next) => {
  console.log("get ran!");
  res.send("get ran!");
});

userRouter.post("/", (req, res, next) => {
  res.send("post works!");
});

userRouter.get("/add", (req, res, next) => {
  res.send("/add router works!");
});

module.exports = userRouter;
