const User = require('../Models/user.model');
const Todo = require('../Models/todo.model')
const todoController = {};
require("dotenv").config()

todoController.addTodo = (req, res) => {
    const newTodo = new Todo({
        title:req.body.title,

        description: req.body.description,
    });
    try {
        newTodo.save();
        res.status(201).json({
            message:"todo added successfully",
            newTodo
        });
    } catch {

        res.status(500).json({
            message:"Error occured while adding todo",
            error
        })
        

    }
};


todoController.removeTodo = (req, res) => {
    let todo;
    try {
        todo = Todo.findOneAndDelete({_id : req.params._id});
        res.status(201).json({
            message:"todo removed successfully",
            newTodo
        });
    } catch (error){

        res.status(500).json({
            message:"Error occured while deleting todo",
            error
        })
        

    }
}

todoController.getAllTodos = async function (req, res) {
    console.log("GET /actors");
    let todos;
    try {
      todos = await Todo.find();
      res.send(todos);
    } catch (error) {
      res.status(500).send(error);
    }
  };










module.exports = todoController
