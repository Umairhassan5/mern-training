/*
* Create the connection file for connect to Postgress DB
* Author: Umair Ul Hassan
*/


// Create constant for PG 
const { Client } = require('pg');

// Set parameters for database
const client = new Client ({

    host: 'localhost',
    user: 'postgres',
    port: '5432',
    password: 'root',
    database: 'postgres'
});

// Now export the client
module.exports = client;