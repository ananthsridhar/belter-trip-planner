const express = require('express');
const router = express.Router();

const tripController = require('./controller/tripsController');
const utilController = require('./controller/utilController');

router.get('/',(req,res)=>{
    res.send('Data Page');
});

// Trips
router.get('/trips',tripController.getTrips);
router.post('/trips/add',tripController.addTrip);

// Utilities
router.get('/mock',utilController.getMock);
router.get('/seedDatabase',utilController.seedDatabase);
router.get('/resetDatabase',utilController.reSeedDatabase);

module.exports = router;