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

// Connect to the database if it exists:
connection.query('USE checkout;', (err, results, fields) => {
  if (err) throw err;
  console.log('Connected to database')
});

/* Create a table to hold basic user information if one doesnt exist: 

Table Name = Users:

Fields:
User_ID INT NOT NULL AUTO_INCREMENT,
Email VARCHAR(100) NOT NULL,
Password VARCHAR(50) NOT NULL,
PRIMARY KEY (User_ID)
*/
connection.query(`CREATE TABLE IF NOT EXISTS users (
                  user_id INT NOT NULL AUTO_INCREMENT, 
                  user_name VARCHAR(50) NOT NULL,
                  email VARCHAR(100) NOT NULL, 
                  password VARCHAR(50) NOT NULL, 
                  PRIMARY KEY(user_id));`, 
                (err, results, fields) => {
  if (err) throw err;
  console.log('User table created')
});

/* Create a table to hold basic address information if one doesnt exist: 

Table Name = Addresses:

Fields:
address_id INT NOT NULL AUTO_INCREMENT
user_id INT NOT NULL,
address_1 VARCHAR(100) NOT NULL,
address_2 VARCHAR(100) NOT NULL,
FOREIGN KEY (user_ID)
*/
connection.query(`CREATE TABLE IF NOT EXISTS addresses (
                  address_id INT NOT NULL AUTO_INCREMENT, 
                  user_id INT NOT NULL,
                  address_1 VARCHAR(100) NOT NULL, 
                  address_2 VARCHAR(100) NULL, 
                  city VARCHAR(100) NOT NULL, 
                  state VARCHAR(50) NOT NULL, 
                  zip_code INT NOT NULL, 
                  phone_number VARCHAR(20) NOT NULL, 
                  PRIMARY KEY(address_id), 
                  FOREIGN KEY(user_id)
                    REFERENCES users(user_id)
                    ON DELETE CASCADE);`, 
                (err, results, fields) => {
  if (err) throw err;
  console.log('Address table created')
});

/* Create a table to hold basic address information if one doesnt exist: 

Table Name = Payment_Type:

Fields:
payment_id INT NOT NULL AUTO_INCREMENT,
user_id INT NOT NULL,
cc INT NOT NULL,
billing_zip INT NOT NULL,
PRIMARY KEY(payment_id),
FOREIGN KEY (user_ID)
*/
connection.query(`CREATE TABLE IF NOT EXISTS payment_type (
                  payment_id INT NOT NULL AUTO_INCREMENT, 
                  user_id INT NOT NULL,
                  cc VARCHAR(19) NOT NULL,
                  billing_zip INT NOT NULL, 
                  PRIMARY KEY(payment_id), 
                  FOREIGN KEY(user_id)
                    REFERENCES users(user_id)
                    ON DELETE CASCADE);`, 
                (err, results, fields) => {
  if (err) throw err;
  console.log('Payment type table created')
});


/*
Users:
+-----------+--------------+------+-----+---------+----------------+
| Field     | Type         | Null | Key | Default | Extra          |
+-----------+--------------+------+-----+---------+----------------+
| user_id   | int(11)      | NO   | PRI | NULL    | auto_increment |
| user_name | varchar(50)  | NO   |     | NULL    |                |
| email     | varchar(100) | NO   |     | NULL    |                |
| password  | varchar(50)  | NO   |     | NULL    |                |
+-----------+--------------+------+-----+---------+----------------+
Addresses:
+--------------+--------------+------+-----+---------+----------------+
| Field        | Type         | Null | Key | Default | Extra          |
+--------------+--------------+------+-----+---------+----------------+
| address_id   | int(11)      | NO   | PRI | NULL    | auto_increment |
| user_id      | int(11)      | NO   | MUL | NULL    |                |
| address_1    | varchar(100) | NO   |     | NULL    |                |
| address_2    | varchar(100) | NO   |     | NULL    |                |
| city         | varchar(100) | NO   |     | NULL    |                |
| state        | varchar(50)  | NO   |     | NULL    |                |
| zip_code     | int(11)      | NO   |     | NULL    |                |
| phone_number | varchar(20)  | NO   |     | NULL    |                |
+--------------+--------------+------+-----+---------+----------------+

Payment_Type:
+-------------+---------+------+-----+---------+----------------+
| Field       | Type    | Null | Key | Default | Extra          |
+-------------+---------+------+-----+---------+----------------+
| payment_id  | int(11) | NO   | PRI | NULL    | auto_increment |
| user_id     | int(11) | NO   | MUL | NULL    |                |
| cc          | int(11) | NO   |     | NULL    |                |
| billing_zip | int(11) | NO   |     | NULL    |                |
+-------------+---------+------+-----+---------+----------------+

TEST DATA:

INSERT INTO users (user_name, email, password) VALUES ('Cal', 'calin.lewis@gmail.com', 'password');
INSERT INTO payment_type (user_id, cc, billing_zip) VALUES (1, '1234567890123456789', '94108');
INSERT INTO addresses (user_id, address_1, city, state, zip_code, phone_number) VALUES (1, '000 California street', 'San Francisco', 'California', '94108', '1111111111');

TEST QUERY:
SELECT addresses.address_1 FROM addresses INNER JOIN users ON addresses.user_id = users.user_id WHERE users.user_name = 'Cal';

Result:
+-----------------------+
| address_1             |
+-----------------------+
| 000 California street |
+-----------------------+


*/
