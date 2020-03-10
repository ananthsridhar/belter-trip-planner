
const Mock = require('./mock-dest');

exports.getData = (req, res) => {
    res.send('Got Data');
}

exports.getMock = (req,res) => {
    console.log("Getting");
    res.json(Mock);
}