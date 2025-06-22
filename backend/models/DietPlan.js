// models/DietPlan.js
const mongoose = require("mongoose");

const mealSchema = new mongoose.Schema({
  name: String,
  calories: Number,
  protein: Number,
  carbs: Number,
  fat: Number,
  items: [String],
});

const dietPlanSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Patient", 
  },
  day: {
    type: String,
    required: true,
    default: "monday", 
  },
  breakfast: mealSchema,
  lunch: mealSchema,
  dinner: mealSchema,
  snacks: mealSchema,
  nutritionSummary: {
    protein: Number,
    carbs: Number,
    fat: Number,
  },
  weeklyProgress: [
    {
      day: String,
      calories: Number,
      target: Number,
    },
  ],
  goals: {
    ironIntake: Number,
    ironTarget: Number,
    fiberIntake: Number,
    fiberTarget: Number,
    sodiumIntake: Number,
    sodiumTarget: Number,
  },
  aiRecommendations: {
    diabetes: [String],
    anemia: [String],
  },
}, { timestamps: true });

module.exports = mongoose.model("DietPlan", dietPlanSchema);
