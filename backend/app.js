// Import required packages
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const morgan = require('morgan');
const connectDB = require('./config/db');

// Environment variables setup
dotenv.config();

connectDB();


const app = express();

// Middlewares
app.use(express.json()); 
app.use(cors());          
app.use(morgan('dev')); 

// Routes
//Idar apne routes dalna

// Root route
app.get('/', (req, res) => {
  res.send('MediScan AI Backend is Running');
});

// Global error handler 
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!', error: err.message });
});

// Start server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
