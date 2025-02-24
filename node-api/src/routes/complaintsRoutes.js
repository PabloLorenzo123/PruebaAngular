const express = require("express");
const authenticate = require("../middlewares/authenticate");
const {
  createComplaint,
  getComplaints,
} = require("../controllers/complaintController");
const complaintsRoutes = express.Router();

// Routes
complaintsRoutes.post("/", authenticate, createComplaint);
complaintsRoutes.get("/", authenticate, getComplaints);

module.exports = complaintsRoutes;
