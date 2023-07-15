const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Middleware
app.use(express.json());

// User data
const users = [];

// Activity log
const activityLog = [];

// Signup route
app.post('/api/signup', (req, res) => {
  const { username, password, role } = req.body;

  // Check if the user already exists
  const existingUser = users.find(user => user.username === username);
  if (existingUser) {
    return res.status(409).json({ error: 'User already exists' });
  }

  // Create a new user
  const newUser = { username, password, role };
  users.push(newUser);

  res.status(201).json({ message: 'User created successfully' });
});

// Login route
app.post('/api/login', (req, res) => {
  const { username, password } = req.body;

  // Find the user
  const user = users.find(user => user.username === username);
  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }

  // Check the password
  if (user.password !== password) {
    return res.status(401).json({ error: 'Invalid password' });
  }

  res.json({ message: 'Login successful' });
});

// Logout route
app.post('/api/logout', (req, res) => {
  res.json({ message: 'Logout successful' });
});

app.post('/api/save-calculation', (req, res) => {
    const { expression, result } = req.body;
    const calculation = { expression, result, master: req.session.user.username };
    calculationLog.push(calculation);
    res.json({ message: 'Calculation saved successfully.' });
  });
  
  app.get('/api/calculation-log', (req, res) => {
    res.json(calculationLog);
  });

// Fetch activity log route
app.get('/api/activity-log', (req, res) => {
  res.json(activityLog);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
