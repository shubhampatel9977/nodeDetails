const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  college: { type: String, require: true },
  designation: { type: String, required: true },
});

module.exports = mongoose.model('Student', studentSchema);
