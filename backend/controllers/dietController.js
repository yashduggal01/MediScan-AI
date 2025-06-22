const fs = require("fs");
const path = require("path");
const pdfParse = require("pdf-parse");
const tesseract = require("tesseract.js");
const DietPlan = require("../models/DietPlan");
const { getGeminiDietPlan } = require("../services/geminiService");
const Patient = require("../models/Patient");

exports.generateDietPlan = async (req, res) => {

  console.log("MULTER FILE OBJECT:", req.file);

  const { userId } = req.params;

  if (!req.file) return res.status(400).json({ message: "No report file uploaded" });

  const filePath = path.join(__dirname, "..", "uploads", req.file.filename);

  try {
    const user = await Patient.findById(userId);
    if (!user) return res.status(404).json({ message: "Patient not found" });

    let reportText = "";

    // Extract text from PDF or Image
    if (req.file.mimetype === "application/pdf") {
      const dataBuffer = fs.readFileSync(filePath);
      const data = await pdfParse(dataBuffer);
      reportText = data.text;
    } else if (req.file.mimetype.startsWith("image/")) {
      const result = await tesseract.recognize(filePath, "eng");
      reportText = result.data.text;
    } else {
      return res.status(400).json({ message: "Unsupported file format" });
    }

    // Call Gemini
    const aiDiet = await getGeminiDietPlan(reportText);

    // Save to MongoDB
    const savedPlan = await DietPlan.create({
      userId,
      day: "monday",
      ...aiDiet,
    });

    res.status(201).json({ message: "Diet plan generated", plan: savedPlan });
  } catch (err) {
    console.error("Error generating diet:", err);
    res.status(500).json({ message: "Server error" });
  } finally {
    fs.unlinkSync(filePath); // Cleanup uploaded file
  }
};
exports.getUserDietPlan = async (req, res) => {
  const { userId } = req.params;

  try {
    const plan = await DietPlan.findOne({ userId }).sort({ createdAt: -1 });
    if (!plan) return res.status(404).json({ message: "No diet plan found" });

    res.status(200).json(plan);
  } catch (err) {
    res.status(500).json({ message: "Error fetching plan" });
  }
};

