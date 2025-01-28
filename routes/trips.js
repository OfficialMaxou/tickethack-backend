var express = require('express');
var router = express.Router();

// lien connexion
require('../models/connection')
const Trip = require('../models/trips')

const { checkBody } = require('../modules/checkBody')


router.get('/', function(req, res, next) {
    Trip.find().then(data=>{
        res.json({ trips: data })
    })
  });

  /*router.post('/',(req,res)=>{
    Trip.find({departure : req.body.departure,
                arrival : req.body.arrival,})
    .then(data =>{
        if (data){
            return res.json( {data})}
        else{ return res.json("No trip found")}
        })
    })*/

    /*router.post('/',(req,res)=>{
        Trip.find({departure : req.body.departure,
                    arrival : req.body.arrival,
                    date : req.body.date //peut etre devoir modifier 
                                        // la date en DD/MM/YYYY pour le front
                })
        .then(data =>{
            if (data){
                return res.json( {data})}
            else{ return res.json(console.log("No trip found"))}
            })
        })*/

           
              
            router.post('/', (req, res) => {
                if (!checkBody(req.body, ['departure', 'arrival', 'date'])) {
                  res.json({ result: false, error: 'ody'})
                  return;
                }
              
                Trip.find({departure : req.body.departure,
                            arrival : req.body.arrival,
                            date : req.body.date}).then(data => {
                  if (data) {
                    res.json({ data});
                  } else {
                    res.json({ result: false, error: 'No trip found' });
                  }
                });
              });
              
module.exports = router;