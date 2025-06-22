
const express = require("express");
const mongoose = require("mongoose");
const EmergencyInfo = require("../models/Emergency-info.js");

const router = express.Router();

// ✅ Test route for health check
router.get("/test", (req, res) => {
  res.json({ success: true, message: "Emergency API is working!" });
});

// ✅ Save or Update Emergency Info
router.post("/save", async (req, res) => {
  try {
    const { userId, ...data } = req.body;

    if (!mongoose.Types.ObjectId.isValid(userId)) {
      return res.status(400).json({ success: false, error: "Invalid userId" });
    }

    const updated = await EmergencyInfo.findOneAndUpdate(
      { userId: new mongoose.Types.ObjectId(userId) },
      data,
      { new: true, upsert: true, setDefaultsOnInsert: true }
    );

    res.json({ success: true, data: updated });
  } catch (error) {
    console.error("🚨 Save Error:", error);
    res.status(500).json({ success: false, error: error.message });
  }
});

// ✅ Get Emergency Info by userId
router.get("/:userId", async (req, res) => {
  try {
    const { userId } = req.params;

    if (!mongoose.Types.ObjectId.isValid(userId)) {
      return res.status(400).json({ success: false, error: "Invalid userId" });
    }

    const info = await EmergencyInfo.findOne({ userId: new mongoose.Types.ObjectId(userId) });

    if (!info) {
      return res.status(404).json({ success: false, message: "Emergency info not found" });
    }

    res.json({ success: true, data: info });
  } catch (error) {
    console.error("🚨 Fetch Error:", error);
    res.status(500).json({ success: false, error: error.message });
  }
});

module.exports = router;
