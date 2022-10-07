// Declarations
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const express = require('express');
const app = express();
const db = require('./models')

const server = http.createServer(app);

app.use('/controllers', express.static('controllers'))

app.set('view engine', 'ejs');

// Nav Bar
    app.get('/', (req, res) => {
        res.render('home');
    });

    app.get('/profile', (req, res) => {
        res.render('profile');
    });

    app.get('/players', (req, res) => {
        res.render('player-search');
    });

    app.get('/create-account', (req, res) => {
        res.render('create-account');
    });

    app.get('/create', (req, res) => {
        res.render('create-account');
    });

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});