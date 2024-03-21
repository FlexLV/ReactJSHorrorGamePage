const express = require('express');
const mysql = require('mysql');
const path = require('path'); // Add this line

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, '../frontend/build')));

// MySQL connection
const connection = mysql.createConnection({
    host: 'database', // Change 'localhost' to 'database'
    user: 'root', // Empty string for username
    password: '1234', // Empty string for password
    database: 'horrorgameforum'
});

connection.connect((err) => {
    if (err) {
      console.error('Error connecting to MySQL:', err);
      return;
    }
    console.log('Connected to MySQL');
});

module.exports = connection;

// Define routes and handle database queries here

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

console.log("Hello World");