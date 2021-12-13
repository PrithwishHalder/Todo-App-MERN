const express = require('express');
const app = express();
const cors = require('cors');
const connectDB = require('./config/db');

// CORS
app.use(cors());

// ROUTERS
const task = require('./routes/task');

// read .env file
const dotenv = require('dotenv');
dotenv.config();
const PORT = process.env.PORT || 5000;

// MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Api Routes
app.use('/api/task', task);

// start server if DB connected
const start = async ()=>{
    try {
        await connectDB()

        // start server and listen on port
        app.listen(PORT, ()=>{console.log(`Server running at port ${PORT}`)});

    } catch (error) {
        console.log(error);
    }
}
start();