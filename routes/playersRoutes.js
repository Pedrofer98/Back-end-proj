// Imports
const express = require('express');
const router = express.Router();

router.get('/players', (req, res) => {
    res.render('player-search', { title: 'Player Search'});
});

module.exports = router