const express = require('express');
const router = express.Router();
const controller = require('./controller');

router.get('/',(req,res)=>{
    res.send('Data Page');
});

router.get('/getData',controller.getData);
router.get('/getMock',controller.getMock);

module.exports = router;