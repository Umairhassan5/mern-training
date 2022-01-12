
// Call the Todos Model
const Todo = require('../models').Todo;

module.exports = {
    // Post data in the table
    create(req, res){
        return Todo
        .create({
            title: req.body.title,
        })
        .then(todo=> res.status(200).send(todo))
        .catch(error=> res.status(400).send(error))
    },

    // Get data from the table
    list(req,res){
        return Todo
        .findAll()
        .then(todos => res.status(200).send(todos))
        .catch(error => res.status(400).send(error))
    },

  
}