const TimeEntry = require('../models/TimeEntry');

exports.startTimeTracking = async (req, res, next) => {
  try {
    const { taskId } = req.body;
    const timeEntry = new TimeEntry({
      user: req.user.id,
      task: taskId,
      startTime: new Date(),
    });
    await timeEntry.save();
    res.status(201).json(timeEntry);
  } catch (error) {
    next(error);
  }
};

exports.stopTimeTracking = async (req, res, next) => {
  try {
    const { timeEntryId } = req.body;
    const timeEntry = await TimeEntry.findOne({ _id: timeEntryId, user: req.user.id });
    if (!timeEntry) return res.status(404).json({ message: 'Time entry not found' });

    timeEntry.endTime = new Date();
    await timeEntry.save();
    res.json(timeEntry);
  } catch (error) {
    next(error);
  }
};

exports.getTimeEntries = async (req, res, next) => {
  try {
    const entries = await TimeEntry.find({ user: req.user.id }).populate('task');
    res.json(entries);
  } catch (error) {
    next(error);
  }
};

exports.getTimeStatistics = async (req, res, next) => {
  try {
    const entries = await TimeEntry.aggregate([
      { $match: { user: req.user._id } },
      {
        $group: {
          _id: '$task',
          totalTimeSpent: {
            $sum: {
              $divide: [{ $subtract: ['$endTime', '$startTime'] }, 1000], // time in seconds
            },
          },
        },
      },
    ]);
    res.json(entries);
  } catch (error) {
    next(error);
  }
};
