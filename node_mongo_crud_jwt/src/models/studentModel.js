const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  like: { type: Number, require: true },
});

module.exports = mongoose.model('Student', studentSchema);
