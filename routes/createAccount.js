// Imports
const express = require('express');
const router = express.Router();

router.get('/create-account', (req, res) => {
    res.render('create-account', { title: 'Create Account'});
});

//pg-promise

module.exports = router