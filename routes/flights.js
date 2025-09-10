const express = require("express");
const router = express.Router();
const Flight = require("../models/Flight");

// ✅ Add new flight
router.post("/", async (req, res) => {
  try {
    const flight = new Flight(req.body);
    await flight.save();
    res.status(201).json(flight);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// ✅ Get all flights
router.get("/", async (req, res) => {
  try {
    const flights = await Flight.find();
    res.json(flights);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ✅ Search flights by from/to
router.get("/search", async (req, res) => {
  try {
    const { from, to } = req.query;
    const query = {};
    if (from) query.from = new RegExp(from, "i");
    if (to) query.to = new RegExp(to, "i");

    const flights = await Flight.find(query);
    res.json(flights);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ✅ Book flight
router.post("/book", async (req, res) => {
  try {
    const { flightId, userId } = req.body;
    if (!flightId || !userId) {
      return res.status(400).json({ error: "Missing flightId or userId" });
    }

    const flight = await Flight.findById(flightId);
    if (!flight) return res.status(404).json({ error: "Flight not found" });

    flight.bookings.push({ userId });
    await flight.save();

    res.json({ message: "Flight booked successfully", flight });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
