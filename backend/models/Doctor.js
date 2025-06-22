const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: { type: String, required: true, unique: true },
  license: String,
  specialty: String,
  hospital: String,
  password: { type: String, required: true }
});

module.exports = mongoose.model("Doctor", doctorSchema);
