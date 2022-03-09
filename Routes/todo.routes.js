const express = require("express");
const Router = express.Router();
const todoController = require('../Controllers/todos.controller');

Router.post("/addTodo", todoController.addTodo);
Router.delete("/removeTodo", todoController.removeTodo);
Router.get("/getTodos", todoController.getAllTodos);


module.exports = Router;