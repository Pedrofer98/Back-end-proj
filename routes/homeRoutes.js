// Imports
const express = require('express');
const router = express.Router();

// Routes
router.get('/', (req, res) => {
    const row = [
        {header: 'Position'},
        {header: 'Team'},
        {header: 'Pts'},
        {header: 'W'},
        {header: 'D'},
        {header: 'L'},
        {header: 'GF'},
        {header: 'GA'},
        {header: 'GD'},
    ];     
    res.render('home', { title: 'Home', row });
});

module.exports = router