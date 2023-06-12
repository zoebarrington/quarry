const express = require('express');
const app = express();

app.use(express.json());

// Create an array to store the names
let names = [];

// Route handler for saving names
app.post('/names', (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ error: 'Name is required' });
  }

  // Add the name to the names array
  names.push(name);

  res.sendStatus(200);
});

// Route handler to get the list of names
app.get('/names', (req, res) => {
  res.json(names);
});

// Start the server
const port = 5000; // Choose the desired port number
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
