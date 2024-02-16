const studentModel = require('../models/studentModel');

const getAllStudents = async() => {
  try {
    const allStudents = await studentModel.find();
    return allStudents;
  } catch (error) {
    console.error("Someting wrong in getAllStudents", error.message);
  }
}

const getStudentById = async(id) => {
  try {
    const studentsById = await studentModel.findById(id);
    return studentsById;
  } catch (error) {
    console.error("Someting wrong in getStudentById", error.message);
  }
}

const createStudent = async(payload) => {
  try{
    const add = new studentModel(payload);
    const savedStudent = await add.save();
    return savedStudent;
  } catch (error) {
    console.error("Someting wrong in createStudent", error.message);
  }
}

const updateStudentById = async(id, payload) => {
  try{
    const options = { new: true }; // create new if id not found
    const updateStudent = await studentModel.findByIdAndUpdate(id, payload, options)
    return updateStudent;
  } catch (error) {
    console.error("Someting wrong in updateStudentById", error.message);
  }
}

const updateStudentLikeById = async(id) => {
  try {
    const updateStudentLike = await studentModel.findOneAndUpdate({_id: id },{ $inc: { like: 1 }}, { returnNewDocument: true, upsert : true});
    return updateStudentLike;
  } catch (error) {
    console.error("Someting wrong in updateStudentLikeById", error.message);
  }
}

const deleteStudentById = async(id) => {
  try {
    const deleteStudent = await studentModel.findByIdAndDelete(id);
    return deleteStudent;
  } catch (error) {
    console.error("Someting wrong in deleteStudentById", error.message);
  }
}

module.exports = {
  getAllStudents,
  getStudentById,
  createStudent,
  updateStudentById,
  updateStudentLikeById,
  deleteStudentById
};