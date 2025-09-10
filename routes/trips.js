// server/routes/trips.js
const express = require("express");
const router = express.Router();
const Trip = require("../models/Trip");

// Get all trips
router.get("/", async (_req, res) => {
  try {
    const trips = await Trip.find().sort({ createdAt: -1 });
    res.json(trips);
  } catch (err) {
    console.error("Error fetching trips:", err);
    res.status(500).json({ message: "Failed to fetch trips" });
  }
});

// Create a new trip
router.post("/", async (req, res) => {
  try {
    // Debug so you can see what the frontend sent
    console.log("Incoming trip data:", req.body);

    const { destination, startDate, endDate, notes } = req.body;

    if (!destination || !startDate || !endDate) {
      return res.status(400).json({ message: "destination, startDate, endDate are required" });
    }

    const trip = new Trip({ destination, startDate, endDate, notes });
    const saved = await trip.save();
    res.status(201).json(saved);
  } catch (err) {
    console.error("Error saving trip:", err);
    res.status(500).json({ message: "Failed to save trip" });
  }
});

module.exports = router;
