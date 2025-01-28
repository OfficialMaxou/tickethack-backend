var express = require('express');
var router = express.Router();

// lien connexion
require('../models/connection')
const Trip = require('../models/trips')
const Booking =require('../models/bookings')
const Cart = require('../models/carts')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
