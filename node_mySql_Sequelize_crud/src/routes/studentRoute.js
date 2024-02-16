const express = require("express");
const router = express.Router();

const studentController = require("../controllers/studentController");

// Define routes
router.get('/', studentController.getAllStudents);
router.get('/:id', studentController.getStudentById);
router.post('/', studentController.createStudent);
router.put('/:id', studentController.updateStudentById);
router.patch('/:id', studentController.updateStudentLikeById);
router.delete('/:id', studentController.deleteStudentById);

module.exports = router;