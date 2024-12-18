const mongoose = require('mongoose');

const MONGO_URI = "mongodb+srv://katkhedep:pass@backend.xf07z.mongodb.net/?retryWrites=true&w=majority&appName=backend";

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('MongoDB connected succesfully');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;