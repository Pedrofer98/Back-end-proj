// Imports
const express = require('express');
const app = express();
const controllers = require('../controllers/userController');
const { addRow } = require('../models/user');
const router = express.Router();
const bodyParser = require('body-parser')

//testing new stuff
const jsonParser = bodyParser.json();

const urlencodedParser = bodyParser.urlencoded({ extended: false})

// midleware to handle incoming req:
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
//Connect models here

var multer = require('multer'); // v1.0.5
var upload = multer(); // for parsing multipart/form-data

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// Routes

router.get('/', controllers.home_Controller);

router.get('/create-account', controllers.create_controller);

// alternative to router.post
//app.post("")

//using jsonParser or urlencodedParser below both return an empty object

router.post('/create-account', urlencodedParser, (req, res) => {
    let username = req.body.username
    let password = req.body.password;
    console.log(req.body.password);
    
    
    addRow(username, password)

// intent: starting on line 30 we are trying to grab a hold of the username and password coming from the 
// frontEnd create profile.js/ after we grab those var's and their values, we can use this statement ==>
//==> db.none("INSERT INTO users (username, password) VALUES (`${x}`,`${y}`)") to feed our user DB with 
// the username and pass coming from the FE when teh user hits the submit button. 
// ultimately we need to send the username into the DB first and then retrieve it. 
    });

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

