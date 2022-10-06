// Imports
const express = require('express');
const homeRoutes = require('./routes/homeRoutes')
const profileRoutes = require('./routes/profileRoutes')
const playersRoutes = require('./routes/playersRoutes')
const app = express();

// Server
app.listen(3000);

// Routes
app.use(homeRoutes);
app.use(profileRoutes);
app.use(playersRoutes);

// Middleware
app.use(express.static(__dirname + '/public'));
app.use('/controllers', express.static('controllers'))
app.set('view engine', 'ejs');