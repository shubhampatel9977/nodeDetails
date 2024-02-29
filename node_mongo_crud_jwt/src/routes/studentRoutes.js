const express = require("express");
const { authUser } = require("../middleware/generateToken");
const studentController = require("../controllers/studentController");

const router = express.Router();

// Define routes
router.post('/', authUser, studentController.createStudentController);
router.get('/', authUser, studentController.getAllStudentsController);
router.get('/:id', authUser, studentController.getStudentByIdController);
router.put('/:id', authUser, studentController.updateStudentByIdController);
router.delete('/:id', authUser, studentController.deleteStudentByIdController);

module.exports = router;
