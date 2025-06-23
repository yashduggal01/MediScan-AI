// // Import required packages
// const express = require('express');
// const dotenv = require('dotenv');
// const cors = require('cors');
// const morgan = require('morgan');
// const connectDB = require('./config/db');
// const authRoutes = require("./routes/authRoutes");

// import emergencyInfoRoutes from "./routes/emergencyInfo.js"
// app.use("/api/emergency", emergencyInfoRoutes)

// // Environment variables setup
// dotenv.config();

// connectDB();


// const app = express();

// // Middlewares
// app.use(express.json()); 
// app.use(cors());          
// app.use(morgan('dev')); 

// // Routes
// //Idar apne routes dalna
// app.use("/api/auth", authRoutes);


// // Root route
// app.get('/', (req, res) => {
//   res.send('MediScan AI Backend is Running');
// });

// // Global error handler 
// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(500).json({ message: 'Something went wrong!', error: err.message });
// });

// // Start server
// const PORT = process.env.PORT || 4000;
// app.listen(PORT, () => {
//   console.log(`Server running on http://localhost:${PORT}`);
// });

const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const morgan = require("morgan");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const dietRoutes = require("./routes/dietRoutes");
const emergencyInfoRoutes  = require("./routes/emergency-info");
const chatbotRoutes = require("./routes/chatbotRoutes");

dotenv.config();
connectDB();

const app = express();

// ✅ Middleware
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

// ✅ Routes
app.use("/api/auth", authRoutes);
app.use("/api/diet", dietRoutes);
app.use("/api/emergency", emergencyInfoRoutes);
app.use("/api/chatbot", chatbotRoutes);



// Root route
app.get('/', (req, res) => {
  res.send('MediScan AI Backend is Running');
});

// ✅ Global error handler
app.use((err, req, res, next) => {
  console.error("❌ Global Error:", err.stack);
  res.status(500).json({ message: "Something went wrong!", error: err.message });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
