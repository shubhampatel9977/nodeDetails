const studentModel = require('../models/studentModel');

const createStudentService = async(payload) => {
  try{
    const add = new studentModel(payload);
    const savedStudent = await add.save();
    return savedStudent;
  } catch (error) {
    console.error("Someting wrong in createStudentService", error.message);
  }
}

const getAllStudentsService = async() => {
  try {
    const allStudents = await studentModel.find();
    return allStudents;
  } catch (error) {
    console.error("Someting wrong in getAllStudentsService", error.message);
  }
}

const getStudentByIdService = async(id) => {
  try {
    const studentsById = await studentModel.findById(id);
    return studentsById;
  } catch (error) {
    console.error("Someting wrong in getStudentByIdService", error.message);
  }
}

const updateStudentByIdService = async(id, payload) => {
  try{
    const options = { new: true }; // create new if id not found
    const updateStudent = await studentModel.findByIdAndUpdate(id, payload, options)
    return updateStudent;
  } catch (error) {
    console.error("Someting wrong in updateStudentByIdService", error.message);
  }
}

const deleteStudentByIdService = async(id) => {
  try {
    const deleteStudent = await studentModel.findByIdAndDelete(id);
    return deleteStudent;
  } catch (error) {
    console.error("Someting wrong in deleteStudentByIdService", error.message);
  }
}

module.exports = {
  createStudentService,
  getAllStudentsService,
  getStudentByIdService,
  updateStudentByIdService,
  deleteStudentByIdService,
};