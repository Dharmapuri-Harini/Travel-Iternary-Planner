const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  flightId: { type: mongoose.Schema.Types.ObjectId, ref: "Flight" },
  passengerName: String,
  email: String
});

module.exports = mongoose.model("Booking", bookingSchema);
