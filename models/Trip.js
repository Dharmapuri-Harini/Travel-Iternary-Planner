// server/models/Trip.js
const mongoose = require("mongoose");

const TripSchema = new mongoose.Schema(
  {
    destination: { type: String, required: true },
    // store as strings to match <input type="date"> values exactly
    startDate: { type: String, required: true },
    endDate:   { type: String, required: true },
    notes:     { type: String, default: "" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Trip", TripSchema);
