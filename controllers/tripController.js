// tripController.js

import Trip from '../models/Trip.js'; // Import the Trip model

// GET all trips
export const getAllTrips = async (req, res) => {
  try {
    const trips = await Trip.find();
    res.json(trips); // Send as JSON response
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// POST create a new trip
export const createTrip = async (req, res) => {
  try {
    const newTrip = new Trip(req.body); // Create trip from request body
    await newTrip.save();               // Save to DB
    res.status(201).json(newTrip);      // Send saved trip as response
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
