const Patient = require("../models/Patient");
const Doctor = require("../models/Doctor");
const bcrypt = require("bcrypt");

exports.registerPatient = async (req, res) => {
  const { firstName, lastName, email, password, phone, dob } = req.body;

  try {
    const existing = await Patient.findOne({ email });
    if (existing) return res.status(400).json({ message: "Patient already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);

    const newPatient = await Patient.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      phone,
      dob
    });

    res.status(201).json({ message: "Patient registered", user: newPatient });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

exports.registerDoctor = async (req, res) => {
  const { firstName, lastName, email, password, license, specialty, hospital } = req.body;

  try {
    const existing = await Doctor.findOne({ email });
    if (existing) return res.status(400).json({ message: "Doctor already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);

    const newDoctor = await Doctor.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      license,
      specialty,
      hospital
    });

    res.status(201).json({ message: "Doctor registered", user: newDoctor });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};


exports.patientLogin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const patient = await Patient.findOne({ email });
    if (!patient) return res.status(404).json({ message: "Patient not found" });

    const isMatch = await bcrypt.compare(password, patient.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid password" });

    res.status(200).json({ message: "Patient login successful", user: patient });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

exports.doctorLogin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const doctor = await Doctor.findOne({ email });
    if (!doctor) return res.status(404).json({ message: "Doctor not found" });

    const isMatch = await bcrypt.compare(password, doctor.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid password" });

    res.status(200).json({ message: "Doctor login successful", user: doctor });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};
