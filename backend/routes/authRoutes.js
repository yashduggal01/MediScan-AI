const express = require("express");
const router = express.Router();
const {
  registerPatient,
  registerDoctor,
  patientLogin,
  doctorLogin,
} = require("../controllers/authController");

router.post("/register/patient", registerPatient);
router.post("/register/doctor", registerDoctor);
router.post("/login/patient", patientLogin);
router.post("/login/doctor", doctorLogin);
module.exports = router;
