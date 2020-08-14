const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./resources/config');

// Initializing express app
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
const PORT_NUMBER = 8080;

// using separate routing for specific route section
const routes = require('./routes');

app.use('/api', routes);

mongoose.connect(`${config.MONGO_HOST}/belter`, { useNewUrlParser: true, useUnifiedTopology: true });
const { connection } = mongoose;

connection.once('open', () => {
  console.log('Connection to MongoDB Established successfully');
});

app.listen(PORT_NUMBER, () => {
  console.log(`Listening on ${config.PORT}`);
});
