// Dependencies
import express from 'express';
// Routes
import indexRoutes from './routes/indexRoutes.js';

// Define variables
const app = express();
const PORT = 3000;

// Use index endpoints
app.use('/', indexRoutes);

// Server listening
app.listen(PORT, () => {
  console.log(`Server is listening on PORT: ${PORT}`);
});
