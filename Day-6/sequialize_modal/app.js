
const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');

// Set up the express app
const app = express();

// Log requests to the console.
// app.use(logger('dev'));

// Parse incomming data 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//Requrire our route into the application
require('./server/routes')(app);

// Setup a default catch-all route that sends back a welcome message in JSON format.
app.get('*', (req, res)=>{
    res.status(200).send({
        message: 'Welcome to the beginning'
    });
})

// Export the app.js

module.exports = app;