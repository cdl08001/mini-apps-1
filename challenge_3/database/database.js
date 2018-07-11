var mysql = require('mysql');

// Connection options will need to be modified depending on environment
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'student',
  password: 'student'
})

// Create the database if it doesnt exist:
connection.query('CREATE DATABASE IF NOT EXISTS checkout;', (err, results, fields) => {
  if (err) throw err;
  console.log('Database Created')
});

