
const express = require('express');
const mysql = require('mysql');

const app = express();
const PORT = process.env.PORT || 8080;

// MySQL connection
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'your_mysql_username',
    password: 'your_mysql_password',
    database: 'your_database_name'
});

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL: ', err);
        return;
    }
    console.log('Connected to MySQL');
});

// Define routes and handle database queries here

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
console.log("Hello World");