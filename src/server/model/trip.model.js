const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Trip = new Schema({
    id: String,
    name: String,
    destinations: [{
        id: String,
        name: String,
        widgets: Array,
        // [{
        //     id: String,
        //     type: String,
        //     data: Object,
        // }],
        loc: String
        // [{
        //     lt: String,
        //     lg: String
        // }],
    }]
})

module.exports = mongoose.model('Trip', Trip);

