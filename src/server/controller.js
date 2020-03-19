
const Mock = require('./mock-dest');

let Trip = require('./model/trip.model');

exports.getData = (req, res) => {
    Trip.find((err,trips) => {
        if(err) {
            console.log(err);
        } else {
            console.log("Got trips");
            res.json(trips);
        }
    })
    // res.send('Got Data');
}

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