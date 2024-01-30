const Mentor = require('../models/mentor');

exports.createMentor = async (req, res) => {
    try {
        const mentor = new Mentor({ name: req.body.name });
        await mentor.save();
        res.status(201).json(mentor);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.addStudents = async (req, res) => {
    // Implement logic to add multiple students to a mentor
};

