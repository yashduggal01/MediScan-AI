
const mongoose = require("mongoose");

const EmergencyInfoSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
    unique: true,
  },
  fullName: String,
  age: Number,
  bloodGroup: String,
  allergies: [String],
  chronicConditions: [String],
  medications: [String],
  emergencyContacts: [
    {
      name: String,
      phone: String,
      relation: String,
    },
  ],
  notes: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("EmergencyInfo", EmergencyInfoSchema);
