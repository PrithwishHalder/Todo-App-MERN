const dotenv = require('dotenv');
dotenv.config();

// DB connection
const mongoose = require('mongoose');

const connectDB = async () => {
    mongoose.connect(process.env.MONGO_URI,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
}

module.exports = connectDB;