const express = require('express');
const mysql = require('mysql');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3017;
app.use(express.json());

// Error handling middleware
app.use((err, req, res, next) => {
    console.error('Error:', err.message);
    res.status(500).send('Something went wrong!');
});
 
// MySQL connection
const connection = mysql.createConnection({
    host: 'database',
    user: 'root',
    password: '', // Replace with the actual password
    database: 'horrorgameforum',
    authSwitchHandler: (data, callback) => {
        if (data.pluginName === 'caching_sha2_password') {
            // Use mysql_native_password authentication plugin
            return callback(null, Buffer.from('mysql_native_password'));
        }
        callback(new Error('Unknown authentication plugin'));
    }
});

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('Connected to MySQL');
});

// Route for inserting data
app.post('/customers', (req, res, next) => {
    console.log('Received request to insertData');
    const { ID, Virsraksts, Attels, Laiks_datums, Teksts } = req.body;
    const sql = 'INSERT INTO zinas (ID, Virsraksts, Attels, `Laiks/datums`, Teksts) VALUES (?, ?, ?, ?, ?)';
    const values = [ID, Virsraksts, Attels, Laiks_datums, Teksts];
    
    connection.query(sql, values, (error, results, fields) => {
        if (error) {
            console.error('Error inserting data:', error);
            // Forward the error to the error handling middleware
            next(error);
            return;
        }
        console.log('Data inserted successfully');
        res.json({ message: 'Data inserted successfully' });
    });
});

// Route to serve React frontend
// Adjust the path to point to your React index.html file

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
