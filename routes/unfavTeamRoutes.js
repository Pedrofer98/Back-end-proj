// Imports
const express = require('express');
const router = express.Router();

// Routes
router.post('/unfav-teams', (req, res) => {
    res.sendStatus(200);
});

module.exports = router