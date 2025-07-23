const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');


// Load environment variables from .env
dotenv.config();
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('✅ Connected to MongoDB Atlas'))
.catch((err) => console.error('❌ MongoDB connection failed:', err));


const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // Parse JSON requests
const authRoutes = require('./routes/auth');
app.use('/api/auth', authRoutes);

// Simple route
app.get('/', (req, res) => {
  res.send('🕌 Muslim Prayer Tracker Backend is running');
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
