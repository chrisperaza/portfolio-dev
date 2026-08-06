// Dependencies
import express from 'express';
import cors from 'cors';
import path from 'path';
// Routes
import indexRoutes from './routes/indexRoutes.js';

// Define variables
const app = express();
const PORT = 3000;

const __dirname = path.resolve();

// Use index endpoints
app.use(cors());
app.use('/', indexRoutes);

// If the endpoint is wrong
app.use(express.static(path.join(__dirname, '../front_end/dist')));
app.get('/*splat', async (req, res) => {
  res.sendFile(path.join(__dirname, '../front_end/dist/index.html'));
});

// Server listening
app.listen(PORT, () => {
  console.log(`Server is listening on PORT: ${PORT}`);
});
