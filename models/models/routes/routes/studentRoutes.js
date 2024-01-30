const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentController');

router.post('/', studentController.createStudent);
router.put('/:studentId/assign-mentor', studentController.assignMentor);
router.get('/unassigned', studentController.getUnassignedStudents);
router.get('/mentor/:mentorId', studentController.getStudentsByMentor);
router.get('/:studentId/previous-mentor', studentController.getPreviousMentor);

module.exports = router;
