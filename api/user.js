const express = require("express");
const mongoose = require("mongoose");
const User = require("/Users/anhminh/WebDemoProjects/mongoDbAtlasConnection/db/User");
const route = express.Router();

route.post("/", async (req, resp) => {
  const { userName, passWord } = req.body;
  let user = {};
  user.userName = userName;
  user.passWord = passWord;

  let userModel = new User(user);
  await userModel.save();
  resp.json(userModel);
});

module.exports = route;
