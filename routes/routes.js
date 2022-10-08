// Imports
const express = require('express');
const controllers = require('../controllers/userController')
const router = express.Router();

//Connect models here

// Routes

router.get('/', controllers.home_Controller);

router.get('/create-account', controllers.create_controller);

router.get('/players', controllers.player_search_controller);

router.get('/profile', controllers.profile_controller);


// router.post('/fav-teams', (req, res) => {
//     res.sendStatus(200);
// });

// router.post('/fav-players', (req, res) => {
//     res.sendStatus(200);
// });

// router.post('/unfav-players', (req, res) => {
//     res.sendStatus(200);
// });

// router.post('/unfav-teams', (req, res) => {
//     res.sendStatus(200);
// });

module.exports = router