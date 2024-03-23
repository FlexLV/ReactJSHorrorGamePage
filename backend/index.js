const express = require('express');
const mysql = require('mysql');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3017;

app.use(express.static(path.join(__dirname, '../frontend/build')));

// MySQL connection
const connection = mysql.createConnection({
    host: 'database',
    user: 'root',
    password: '', // Replace with the actual password
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
