const express = require("express");
const Router = express.Router();
const userController = require("../Controllers/user.controller");

Router.post("/signup", userController.signup);

module.exports = Router;
