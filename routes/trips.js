var express = require('express');
var router = express.Router();

// lien connexion
require('../models/connection')
const Trip = require('../models/trips')

const { checkBody } = require('../modules/checkBody')
const moment = require('moment')

/*
router.get('/', function(req, res, next) {
    Trip.find().then(data=>{
        res.json({ trips: data })
    })
  });*/
              
 router.post('/', (req, res) => {
  if (!checkBody(req.body, ['departure', 'arrival', 'date'])) {
      res.json({ result: false, error: 'Missing or empty fields'})
      return;
  }    
     Trip.find({ departure : { $regex: new RegExp(`^${req.body.departure}$`, 'i')},
     arrival : { $regex: new RegExp(`^${req.body.arrival}$`, 'i')} ,
      date : {
              $gte: moment.utc(req.body.date).startOf("day").toDate(),
              $lt: moment.utc(req.body.date).endOf("day").toDate(),},
      })
      .then(VilleMatch => {
      if (VilleMatch) {
        res.json({ result : true, VilleMatch});
      } else {
        res.json({ result: false, error: 'No trip found' });
          }
   });
 });
 
module.exports = router;