const Mock = require('../resources/mock-dest');
const Trip = require('../model/trip.model');

exports.getMock = (req, res) => {
  console.log('Getting');
  res.json(Mock);
};

exports.seedDatabase = (req, res) => {
  Mock.map((trip, index) => {
    const t = new Trip(trip);
    t
      .save()
      .then(t => res.status(200).json({ trip: 'Seeding Successful' }))
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
