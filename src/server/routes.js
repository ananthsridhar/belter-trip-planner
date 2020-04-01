const express = require('express');
const router = express.Router();
const controller = require('./controller');

router.get('/',(req,res)=>{
    res.send('Data Page');
});

router.get('/trips',controller.getTrips);
router.get('/mock',controller.getMock);
router.get('/seedDatabase',controller.seedDatabase);

module.exports = router;