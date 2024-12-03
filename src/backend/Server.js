const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
const port = 3001;

// Configure CORS to allow requests from your frontend
const corsOptions = {
  origin: 'http://localhost:3000', // Update this with the correct frontend URL
};
app.use(cors(corsOptions));
app.use(express.json());

// Create a MySQL database connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Goodbye8934!',
  database: 'software',
});

// Connect to the database
db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL: ' + err);
    throw err; // Terminate the application if the database connection fails
  }
  console.log('Connected to MySQL');
});

// Handle POST requests to '/register' for user registration
app.post('/register', (req, res) => {
  const { email, password, firstName, lastName, username } = req.body;

  console.log('Received POST request with data:');
  console.log('Email:', email);
  console.log('Password:', password);
  console.log('FirstName:', firstName);
  console.log('LastName:', lastName);
  console.log('Username:', username);

  const insertQuery = 'INSERT INTO tblAcc (EmailAcc, UserName, Password, Name, LastName) VALUES (?, ?, ?, ?, ?)';
  // Use placeholders to prevent SQL injection
  db.query(insertQuery, [email, username, password, firstName, lastName], (err, results) => {
    if (err) {
      console.error('Error inserting data: ' + err);
      res.status(500).json({ error: 'Error inserting data' }); // Send a JSON response with an error message
      return;
    }
    console.log('Data inserted successfully');
    res.status(200).json({ message: 'Registration successful' }); // Send a JSON response for success
  });
});

// Handle general server errors
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal Server Error' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
