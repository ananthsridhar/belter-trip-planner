
const Mock = require('../resources/mock-dest');
var Trip = require('../model/trip.model');

exports.getMock = (req,res) => {
    console.log("Getting");
    res.json(Mock);
}

exports.seedDatabase = (req,res) => {
    let trips = Mock;
    Mock.map((trip,index) => {
        let t = new Trip(trip);
        t.save()
        .then(t => res.status(200).json({trip:"Seeding Successful"}))
        .catch(err => res.status(400).send(err))
    });
}

exports.reSeedDatabase = (req,res) => {
    let trips = Mock;
    Trip.remove().then(() => {
        seedDatabase();
    })
    .catch(err => res.status(400).send(err))
}