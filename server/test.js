const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();
const port = 4000;

// Middleware
app.use(bodyParser.json());

// MySQL Connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',       // Replace with your MySQL username
  password: 'root',       // Replace with your MySQL password
  database: 'test'    // Replace with your database name
});

// Connect to MySQL
db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL database.');
});

// Route to Create a User
app.post('/users', (req, res) => {
  const { userId, emailId, password } = req.body;

  if (!userId || !emailId || !password) {
    return res.status(400).send('Please provide userId, emailId, and password');
  }

  const query = 'INSERT INTO users (userId, emailId, password) VALUES (?, ?, ?)';
  db.query(query, [userId, emailId, password], (err, result) => {
    if (err) {
      console.error('Error inserting user:', err);
      return res.status(500).send('Failed to create user');
    }
    res.status(201).send('User created successfully');
  });
});

// Route to Get All Users
app.get('/users', (req, res) => {
  const query = 'SELECT * FROM users';
  db.query(query, (err, results) => {
    if (err) {
      console.error('Error fetching users:', err);
      return res.status(500).send('Failed to fetch users');
    }
    res.json(results);
  });
});

// Start the Server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
