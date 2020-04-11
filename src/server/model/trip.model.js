const mongoose = require('mongoose');

const { Schema } = mongoose;

const Trip = new Schema({
  name: String,
  destinations: [
    {
      id: String,
      name: String,
      widgets: Array,
      // [{
      //     id: String,
      //     type: String,
      //     data: Object,
      // }],
      loc: String,
      // [{
      //     lt: String,
      //     lg: String
      // }],
    },
  ],
});

module.exports = mongoose.model('Trip', Trip);
