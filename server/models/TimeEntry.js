const mongoose = require('mongoose');

const timeEntrySchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  task: { type: mongoose.Schema.Types.ObjectId, ref: 'Task', required: true },
  startTime: { type: Date, required: true },
  endTime: { type: Date },
}, { timestamps: true });

module.exports = mongoose.model('TimeEntry', timeEntrySchema);
