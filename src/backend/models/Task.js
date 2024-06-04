// models/Task.js

const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  status: { type: String, enum: ['to do', 'in progress', 'completed'], default: 'to do' },
  datetime: { type: Date, required: true }
});

module.exports = mongoose.model('Task', taskSchema);
