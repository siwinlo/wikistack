const express = require("express");
const app = express();
const morgan = require("morgan");
const db = require("./database");

//logging middleware
app.use(morgan("dev"));
//serving static files from 'public' directory
app.use(express.status("public"));

//body parsing middleware
app.use(express.urlencoded({ extended: false }));
