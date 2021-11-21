const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Must Provide Name.'], // true, also happens when send empty string
    trim: true, // trims string
    maxlength: [20, 'Name cannot be more than 20 characters.']
  }, completed: {
    type: Boolean,
    default: false, // so don't want required even tho it seems okay to make it true
  },
}); // ignores other fields from request body not in Schema

module.exports = mongoose.model('Task', TaskSchema); // 1st arg = name of collection model is for
