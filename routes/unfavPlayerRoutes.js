// Imports
const express = require('express');
const router = express.Router();

// Routes
router.post('/unfav-players', (req, res) => {
    res.sendStatus(200);
});

module.exports = router