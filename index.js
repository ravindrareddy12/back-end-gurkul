const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const db = require('./config/db');
const app = express();
const cors = require('cors');

// Use the cors middleware
app.use(cors());

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Use routers
app.use('/', require('./routers'));

// Handle preflight requests
app.options('*', (req, res) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.sendStatus(200);
});

// Start the server
const port = 3005;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
