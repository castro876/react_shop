const express = require('express');
const mongoose = require('mongoose');
const env = require('dotenv').config();
const ejs = require('ejs');
const cors = require('cors');
const axios = require('axios');
const privateRoutes = require('./routes/private_routes');

const app = express();

// Middleware
app.use(express.json());
app.use(express.static(__dirname + '/public/')); // This connects the path to the file
app.set('view engine', 'ejs');
app.use(cors()); // Enable CORS for all routes

mongoose.connect(process.env._API_key)
  .then(() => {
    app.listen(process.env.PORT || 4000, () => console.log(`Listening on PORT ${process.env.PORT || 4000}`));
    console.log('Connected to database successfully');
  })
  .catch(err => console.log(err));

// Routes
app.use(privateRoutes);
