const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

//Initializing express app
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors());
const PORT_NUMBER = 8080;

// using separate routing for specific route section
const data = require('./routes');
app.use('/data',data);

app.listen(PORT_NUMBER,() => {
    console.log("LIstening on "+PORT_NUMBER);
});