// const express = require('express');
// const mongoose = require('mongoose');
// const dotenv = require('dotenv');
// const cors = require('cors');

// // Load environment variables from .env file
// dotenv.config();

// // Import database connection and routes
// const connectDB = require('./config/db');
// const labRoutes = require('./routes/labRoutes');

// const app = express();

// // Middleware
// app.use(cors());
// app.use(express.json()); // Allows parsing of JSON request bodies

// // Connect to MongoDB
// connectDB();

// // API Routes
// app.use('/api', labRoutes);

// // Simple welcome route
// app.get('/', (req, res) => {
//     res.send('Diagnosathi Backend API is running...');
// });

// const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));



const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

// Load environment variables from .env file
dotenv.config();

// Import database connection and routes
const connectDB = require('./config/db');
const labRoutes = require('./routes/labRoutes');
const billRoutes = require('./routes/billRoutes'); // New import for bill routes

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // Allows parsing of JSON request bodies

// Connect to MongoDB
connectDB();

// API Routes
app.use('/api', labRoutes); // Changed path for clarity
app.use('/api/bills', billRoutes); // This connects the bill routes

// Simple welcome route
app.get('/', (req, res) => {
    res.send('Diagnosathi Backend API is running...');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
