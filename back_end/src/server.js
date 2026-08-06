// Dependencies
import express from 'express';
import dotenv from 'dotenv/config';
import cors from 'cors';
// Routes
import indexRoutes from './routes/indexRoutes.js';

// Define variables
const app = express();
const PORT = process.env.PORT || 3000;

// Use index endpoints
app.use(cors());
app.use('/', indexRoutes);

// Server listening
app.listen(PORT, () => {
  console.log(`Server is listening on PORT: ${PORT}`);
});
