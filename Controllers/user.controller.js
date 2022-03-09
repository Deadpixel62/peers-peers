const User = require('../Models/user.model');
const userController = {};
require("dotenv").config()

userController.signup = (req, res) =>  {
    const newUser = new User({
        email: req.body.email
    });
    try {
        newUser.save();
        res.status(201).json({
            message:"user added successfully",
            newUser
        });
    } catch (error) {
        res.status(500).json({
            message:"Error occured while creating user",
            error
        })
    }
}


  
  module.exports = userController