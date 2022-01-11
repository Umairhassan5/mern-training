
// postgress DB

const { Client } = require('pg');

const client = new Client({

    host: 'localhost',
    port : 5432,
    user: 'postgress',
    password: '',
    database: 'mydb'
})

client.connect();

let query = `Select * from users`;

client.query(query, (err, res)=>{
    if(!err){
        console.log(res.rows, 'The data get from the table');
    }
    else{
        console.log(err.message, 'Not record found')
    }
    client.end;
})


