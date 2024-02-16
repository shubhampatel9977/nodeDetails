const {
  studentIdSchema,
  studentSchema,
  studentLikeSchema,
} = require("../validations/studentValidation");
const studentService = require("../services/studentService");

// Controller methods
const getAllStudents = async (req, res) => {
  try {
    const allStudents = await studentService.getAllStudents();
    if (allStudents) {
      res.status(200).json({ data: allStudents });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getStudentById = async (req, res) => {
  try {
    const { error, value } = studentIdSchema.validate(req.params);
    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }
    const studentById = await studentService.getStudentById(value.id);
    if (studentById) {
      res.status(200).json({ data: studentById });
    } else {
      res.status(200).json({ message: "Student Id Not Found" });
    }
  } catch (error) {
    res.json({ api_status: 500, message: error.message });
  }
};

const createStudent = async (req, res) => {
  try {
    const { error, value } = studentSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }
    const result = await studentService.createStudent(value);
    if (result) {
      res
        .status(201)
        .json({ message: "Student add successfully", data: result });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateStudentById = async (req, res) => {
  try {
    const { error: idError, value: idValue } = studentIdSchema.validate(
      req.params
    );
    if (idError) {
      return res.status(400).json({ message: idError.details[0].message });
    }

    const { error: bodyError, value: bodyValue } = studentSchema.validate(
      req.body
    );
    if (bodyError) {
      return res.status(400).json({ message: bodyError.details[0].message });
    }

    const result = await studentService.updateStudentById(
      idValue.id,
      bodyValue
    );

    if (result) {
      res
        .status(200)
        .json({ message: "Student update successfully", data: result });
    } else {
      res.status(200).json({ message: "Student Id Not Found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateStudentLikeById = async (req, res) => {
  try {
    const { error: idError, value: idValue } = studentIdSchema.validate(
      req.params
    );
    if (idError) {
      return res.status(400).json({ message: idError.details[0].message });
    }

    const { error: bodyError, value: bodyValue } = studentLikeSchema.validate(
      req.body
    );
    if (bodyError) {
      return res.status(400).json({ message: bodyError.details[0].message });
    }
    const result = await studentService.updateStudentLikeById(idValue.id);

    if (result) {
      res
        .status(200)
        .json({ message: "Student update like successfully", data: result });
    } else {
      res.status(200).json({ message: "Student Id Not Found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteStudentById = async (req, res) => {
  try {
    const { error, value } = studentIdSchema.validate(req.params);
    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }
    const result = await studentService.deleteStudentById(value.id);

    if (result) {
      res.status(200).json({ message: "Student delete successfully" });
    } else {
      res.status(200).json({ message: "Student Id Not Found" });
    }
  } catch (error) {
    res.status(200).json({ message: error.message });
  }
};

module.exports = {
  getAllStudents,
  getStudentById,
  createStudent,
  updateStudentById,
  updateStudentLikeById,
  deleteStudentById,
};
