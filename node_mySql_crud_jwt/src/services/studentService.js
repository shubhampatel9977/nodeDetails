const db = require('../config/mySqlDB');

const getAllStudents = async() => {
  try {
    const query = 'SELECT * FROM students';
    const result = await new Promise((resolve, reject) => {
      db.query(query, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
    return result ? result : false;
  } catch (error) {
    console.error("Someting wrong in getAllStudents", error.message);
  }
}

const getStudentById = async(id) => {
  try {
    const query = 'SELECT * FROM students WHERE id = ?';
    const values = [id];
    const result = await new Promise((resolve, reject) => {
      db.query(query, values, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
    return result ? result : false;
  } catch (error) {
    console.error("Someting wrong in getStudentById", error.message);
  }
}

const createStudent = async({ name, age, like}) => {
  try{
    const query = 'INSERT INTO students (name, age, `like`) VALUES (?, ?, ?)';
    const values = [name, age, like];

    await new Promise((resolve, reject) => {
      db.query(query, values, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });

    const insertedRecord = await new Promise((resolve, reject) => {
      const selectQuery = 'SELECT * FROM students WHERE id = LAST_INSERT_ID()';
      db.query(selectQuery, (err, rows) => {
        if (err) {
          reject(err);
        } else {
          resolve(rows[0]);
        }
      });
    });

    return insertedRecord;
  } catch (error) {
    console.error("Someting wrong in createStudent", error.message);
  }
}

const updateStudentById = async(id, payload) => {
  try{

    console.log('id --->', id)
    const query = 'UPDATE students SET name = ? , age = ?, `like` = ? WHERE id = ?';
    const values = [payload.name, payload.age, payload.like, id];

    await new Promise((resolve, reject) => {
      db.query(query, values, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });

    const updatedRecord = await new Promise((resolve, reject) => {
      const selectQuery = 'SELECT * FROM students WHERE id = ?';
      db.query(selectQuery, [id], (err, rows) => {
        if (err) {
          reject(err);
        } else {
          resolve(rows[0]);
        }
      });
    });
    console.log('updatedRecord -->', updatedRecord)
    return updatedRecord;

  } catch (error) {
    console.error("Someting wrong in updateStudentById", error.message);
  }
}

const updateStudentLikeById = async(id) => {
  try {
    const query = 'UPDATE students SET `like` = `like` + 1 WHERE id = ?';
    const values = [id];

    await new Promise((resolve, reject) => {
      db.query(query, values, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });

    const updatedRecord = await new Promise((resolve, reject) => {
      const selectQuery = 'SELECT * FROM students WHERE id = ?';
      db.query(selectQuery, [id], (err, rows) => {
        if (err) {
          reject(err);
        } else {
          resolve(rows[0]);
        }
      });
    });

    return updatedRecord;

  } catch (error) {
    console.error("Someting wrong in updateStudentLikeById", error.message);
  }
}

const deleteStudentById = async(id) => {
  try {
    const query = 'DELETE FROM students WHERE id = ?';
    const values = [id];
    const result = await new Promise((resolve, reject) => {
      db.query(query, values, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
    return result ? true : false;
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