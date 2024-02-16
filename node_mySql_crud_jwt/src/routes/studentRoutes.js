const express = require("express");
const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");
const studentController = require("../controllers/studentController");

// Define routes
router.get('/', authMiddleware, studentController.getAllStudents);
router.get('/:id', authMiddleware, studentController.getStudentById);
router.post('/', authMiddleware, studentController.createStudent);
router.put('/:id', authMiddleware, studentController.updateStudentById);
router.patch('/:id', authMiddleware, studentController.updateStudentLikeById);
router.delete('/:id', authMiddleware, studentController.deleteStudentById);

module.exports = router;
