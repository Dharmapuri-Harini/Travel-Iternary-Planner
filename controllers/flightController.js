const Flight = require('../models/Flight');

// GET all flights
exports.getAllFlights = async (req, res) => {
  try {
    const flights = await Flight.find();
    res.json(flights);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// POST a new flight
exports.createFlight = async (req, res) => {
  const { airline, flightNumber, from, to, departureTime, arrivalTime, price } = req.body;

  try {
    const newFlight = new Flight({ airline, flightNumber, from, to, departureTime, arrivalTime, price });
    await newFlight.save();
    res.status(201).json(newFlight);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
