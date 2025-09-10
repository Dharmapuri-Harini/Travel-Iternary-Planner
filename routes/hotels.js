// server/routes/hotels.js
const express = require("express");
const Hotel = require("../models/Hotel");

const router = express.Router();

// Save hotel data
router.post("/", async (req, res) => {
  try {
    const hotel = new Hotel(req.body);
    await hotel.save();
    res.status(201).json(hotel);
  } catch (error) {
    res.status(500).json({ message: "Error saving hotel data", error });
  }
});

// Get all hotels
router.get("/", async (req, res) => {
  try {
    const hotels = await Hotel.find();
    res.json(hotels);
  } catch (error) {
    res.status(500).json({ message: "Error fetching hotels", error });
  }
});

module.exports = router;
