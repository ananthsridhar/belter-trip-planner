const Trip = require('../model/trip.model');

exports.getTrips = (req, res) => {
  Trip.find((err, trips) => {
    if (err) {
      console.error(err);
      res.status(500).send(err);
    } else {
      console.log('Retrieved trips');
      res.json(trips);
    }
  });
};

exports.addTrip = (req, res) => {
  console.log(req.body);
  const trip = new Trip(req.body);
  trip.save((err) => {
    if (err) res.status(500).send(err);
    res.send(trip);
  });
};
