const Mock = require('./mock-dest');
const Trip = require('../model/trip.model');

exports.getMock = (req, res) => {
  console.log('Getting');
  res.json(Mock);
};

exports.seedDatabase = (req, res) => {
  Mock.map((trip) => {
    const t = new Trip(trip);
    t
      .save()
      .then(() => res.status(200).json({ trip: 'Seeding Successful' }))
      .catch(err => res.status(400).send(err));
  });
};

exports.reSeedDatabase = (req, res) => {
  Trip.remove()
    .then(() => {
      seedDatabase();
    })
    .catch(err => res.status(400).send(err));
};
