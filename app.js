// Imports
const express = require('express');
const homeRoutes = require('./routes/homeRoutes');
const profileRoutes = require('./routes/profileRoutes');
const playersRoutes = require('./routes/playersRoutes');

const createAccount = require('./routes/create-account');

const favTeamRoutes = require('./routes/favTeamRoutes');
const unfavTeamRoutes = require('./routes/unfavTeamRoutes');

const favPlayerRoutes = require('./routes/favPlayerRoutes.js');
const unfavPlayerRoutes = require('./routes/unfavPlayerRoutes');

const app = express();

// Server
app.listen(3000);

// Routes
app.use(homeRoutes);
app.use(profileRoutes);
app.use(playersRoutes);
app.use(createAccount);

app.use(favTeamRoutes);
app.use(unfavTeamRoutes);
app.use(favPlayerRoutes);
app.use(unfavPlayerRoutes);

// Middleware
app.use(express.static(__dirname + '/public'));
app.use('/controllers', express.static('controllers'));
app.use('/front-end-js', express.static('front-end-js'));
app.set('view engine', 'ejs');