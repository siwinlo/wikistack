const express = require("express");
const app = express();
const morgan = require("morgan");
const {db}=require('./models');
const views = require("./views");
const layout = require("./views/layout");
const models=require('./models');

db.authenticate().
then(() => {
  console.log('connected to the database');
})

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

// const init=async()=>{
//  await models.User.sync();
//  await models.Page.sync();

//  app.listen(3000, () => console.log("App listening on Port 3000"));
// }

const init =async ()=>{
  
  await models.db.sync()
  app.listen(3000,()=>{
    console.log("App listening on Port 3000");
  })
}



init();


