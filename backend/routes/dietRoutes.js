// routes/dietRoutes.js
const express = require("express");
const router = express.Router();
const { generateDietPlan, getUserDietPlan } = require("../controllers/dietController");
const upload = require("../middlewares/upload");

router.post("/generate-from-report/:userId", upload.single("reportFile"), generateDietPlan);

router.post("/generate", generateDietPlan);    
router.get("/:userId", getUserDietPlan);        

module.exports = router;
