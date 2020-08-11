const express = require('express');

const router = express.Router();

const tripController = require('./routes/trips');
const utilController = require('./resources/util');

router.get('/', (req, res) => {
  res.send('Data Page');
});

// Trips
router.get('/trips', tripController.getTrips);
router.post('/trips/add', tripController.addTrip);
router.put('/trips/update', tripController.updateTrip);

// Utilities
router.get('/mock', utilController.getMock);
router.get('/seedDatabase', utilController.seedDatabase);
router.get('/resetDatabase', utilController.reSeedDatabase);

module.exports = router;
