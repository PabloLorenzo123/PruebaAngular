const Complaint = require("../models/");

const createComplaint = async (req, res) => {
  try {
    const { title, description } = req.body;
    const { userId } = req.user;

    // Create complaint
    const complaint = await Complaint.create({
      title,
      description,
      userId,
    });

    return res.status(201).json(complaint);
  } catch (err) {
    console.error(err);
    return res.status(500).send("An error has ocurred.");
  }
};

const getComplaints = async (req, res) => {
  try {
    console.log(req.user);
    const { userId } = req.user;

    // Get all complaints made by user
    const complaints = await Complaint.findAll({
      where: {
        userId,
      },
    });

    return res.json(complaints);
  } catch (err) {
    console.error(err);
    return res.status(500).send("An error has ocurred.");
  }
};

module.exports = {
  createComplaint,
  getComplaints,
};
