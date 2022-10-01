const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const express = require('express');
const app = express();

const server = http.createServer(app);

app.use('/controllers', express.static('controllers'))

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('home');
    // res.sendFile('views/home.html', { root: __dirname});
});

app.get('/players', (req, res) => {
    res.sendFile('views/player-search.html', { root: __dirname});
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});