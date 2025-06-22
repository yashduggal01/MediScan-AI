const mongoose = require("mongoose");

const patientSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: { type: String, required: true, unique: true },
  phone: String,
  dob: Date,
  password: { type: String, required: true }
});

module.exports = mongoose.model("Patient", patientSchema);
