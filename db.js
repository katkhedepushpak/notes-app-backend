// Import the mongoose library
const mongoose = require('mongoose');

// MongoDB connection URI
const MONGO_URI = "mongodb+srv://katkhedep:pass@backend.xf07z.mongodb.net/notes-app?retryWrites=true&w=majority&appName=backend";

// Function to connect to MongoDB
const connectDB = async () => {
  try {
    // Attempt to connect to MongoDB
    await mongoose.connect(MONGO_URI);
    console.log('MongoDB connected successfully');
  } catch (err) {
    // Log any errors that occur during connection
    console.error(err.message);
    // Exit the process with failure
    process.exit(1);
  }
};

// Export the connectDB function for use in other parts of the application
module.exports = connectDB;