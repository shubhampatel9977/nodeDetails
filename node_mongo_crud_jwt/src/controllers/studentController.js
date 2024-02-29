const { studentIdSchema, studentSchema } = require("../validations/studentValidation");
const studentService = require("../services/studentService");

const createStudentController = async (req, res) => {
  try {
    // Check Validation
    const { error, value } = studentSchema.validate(req.body);
    if (error)
      return res.status(400).json({ message: error.details[0].message });

    // Create Student
    const result = await studentService.createStudentService(value);
    if (result) {
      return res.status(201).json({ message: "Student add successfully", data: result });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAllStudentsController = async (req, res) => {
  try {
    // const userId = req.userId   // Login user id get in token

    // Get all students
    const allStudents = await studentService.getAllStudentsService();

    if (allStudents.length === 0) 
      return res.status(404).json({ error: 'No students found' });

    return res.status(200).json({ data: allStudents });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const getStudentByIdController = async (req, res) => {
  try {
    // Check Validation
    const { error, value } = studentIdSchema.validate(req.params);
    if (error)
      return res.status(400).json({ message: error.details[0].message });

    // Get student by id
    const studentData = await studentService.getStudentByIdService(value.id);

    if (studentData) {
      return res.status(200).json({ data: studentData });
    } else {
      return res.status(200).json({ message: "Student not found" });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const updateStudentByIdController = async (req, res) => {
  try {
    // Check Validation Param
    const { error: idError, value: idValue } = studentIdSchema.validate(req.params);
    if (idError)
      return res.status(400).json({ message: idError.details[0].message });

    // Check Validation Body
    const { error: bodyError, value: bodyValue } = studentSchema.validate(req.body);
    if (bodyError)
      return res.status(400).json({ message: bodyError.details[0].message });

    // Find student and update
    const result = await studentService.updateStudentByIdService(idValue.id, bodyValue);
    if (result) {
      return res.status(200).json({ message: "Student update successfully", data: result });
    } else {
      return res.status(200).json({ message: "Student not found" });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const deleteStudentByIdController = async (req, res) => {
  try {
    // Check Validation Param
    const { error, value } = studentIdSchema.validate(req.params);
    if (error)
      return res.status(400).json({ message: error.details[0].message });

    // Find and delete student
    const result = await studentService.deleteStudentByIdService(value.id);
    if (result) {
      res.status(200).json({ message: "Student delete successfully" });
    } else {
      res.status(200).json({ message: "Student not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createStudentController,
  getAllStudentsController,
  getStudentByIdController,
  updateStudentByIdController,
  deleteStudentByIdController,
};
