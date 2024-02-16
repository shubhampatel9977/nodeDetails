const StudentsModel = require('../models/student');

const getAllStudents = async() => {
  try {
    const students = await StudentsModel.findAll();
    return students;
  } catch (error) {
    console.error("Someting wrong in getAllStudents", error.message);
  }
}

const getStudentById = async(id) => {
  try {
    const student = await StudentsModel.findOne({ where: { student_id: id } });
    return student;
  } catch (error) {
    console.error("Someting wrong in getStudentById", error.message);
  }
}

const createStudent = async(payload) => {
  try{
    const result = await StudentsModel.create(payload);
    return result.dataValues;
  } catch (error) {
    console.error("Someting wrong in createStudent", error.message);
  }
}

const updateStudentById = async(id, payload) => {
  try{
    const result = await StudentsModel.update(payload, { where: { student_id: id }});

    let updateRecord;
    if(result[0] === 1) {
      updateRecord = await StudentsModel.findOne({ where: { student_id: id } });
    } else {
      return false
    }
    return updateRecord;
  } catch (error) {
    console.error("Someting wrong in updateStudentById", error.message);
  }
}

const updateStudentLikeById = async(id) => {
  try {
    const result = await StudentsModel.findByPk(id).then((student) => {
      return student.increment('like', { by: 1})
    })

    return result.dataValues;
  } catch (error) {
    console.error("Someting wrong in updateStudentLikeById", error.message);
  }
}

const deleteStudentById = async(id) => {
  try {
    const result = await StudentsModel.destroy({ where: { student_id: id }});
    return result;
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