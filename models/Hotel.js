// server/models/Hotel.js
const mongoose = require("mongoose");

const hotelSchema = new mongoose.Schema({
  id: { type: String, required: true },
  name: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  address: { type: String, required: true },
  rating: { type: Number, required: true },
  reviews: { type: Number, required: true },
  price: { type: Number, required: true },
  currency: { type: String, required: true },
  stars: { type: Number, required: true },
  amenities: { type: [String], required: true },
  image: { type: String, required: true },
});

// Prevent OverwriteModelError
module.exports = mongoose.models.Hotel || mongoose.model("Hotel", hotelSchema);
