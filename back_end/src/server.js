// Import dependencies
import express from 'express';

// Define variables
const app = express();
const PORT = 3000;

// Get
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

// Server listening
app.listen(PORT, () => {
  console.log(`Server is listening on PORT: ${PORT}`);
});
