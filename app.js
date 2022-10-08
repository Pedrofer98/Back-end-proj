// Imports
const express = require('express');

const routes = require('./routes/routes');
const app = express();

// Server
app.listen(3000);

// Routes
app.use(routes);


// Middleware
app.use(express.static(__dirname + '/public'));
app.use('/controllers', express.static('controllers'));
app.use('/front-end-js', express.static('front-end-js'));
app.set('view engine', 'ejs');