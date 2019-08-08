const express = require("express");
const app = express();
const morgan = require("morgan");
const { db } = require("./models");
const views = require("./views");
const layout = require("./views/layout");
const models = require("./models");

const userRouter = require("./routes/user");
const wikiRouter = require("./routes/wiki");

db.authenticate().then(() => {
  console.log("connected to the database");
});

//logging middleware
app.use(morgan("dev"));
//serving static files from 'public' directory
app.use(express.static("public"));

//body parsing middleware
app.use(express.urlencoded({ extended: false }));

//specific routes for the '/wiki' and '/user' URIs, these need to be added before the '/' route in order to be run
app.use("/user", userRouter);
app.use("/wiki", wikiRouter);

//homepage route for 'localhost:3000'
app.get("/", (req, res, next) => {
  //res.send(layout());
  res.redirect("/wiki");
});

// const init=async()=>{
//  await models.User.sync();
//  await models.Page.sync();

//  app.listen(3000, () => console.log("App listening on Port 3000"));
// }

const init = async () => {
  await models.db.sync();
  app.listen(3000, () => {
    console.log("App listening on Port 3000");
  });
};

init();
