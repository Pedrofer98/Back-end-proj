// Imports
const express = require('express');
const router = express.Router();

router.get('/create-account', (req, res) => {
    res.render('create-account', { title: 'Create Account'});
    //Does pg-promise go directly here?
});

module.exports = router

