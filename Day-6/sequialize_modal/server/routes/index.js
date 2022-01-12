// Call the controllers
const todosController = require('../controllers').todos;
const todoItemsController = require('../controllers').todoItems;

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the Todos API!',
  }));

  // Post data in the table todo
  app.post('/api/todos', todosController.create);
  
  // Get data of the listing table route
  app.get('/api/todos', todosController.list);

  // Post data in the table todosItem
  app.post('/api/todos/:todoId/items', todoItemsController.create);

  // Retrieve single data from the todos
  // app.get('/api/todos/:todoId', todosController.retrieve)
};
