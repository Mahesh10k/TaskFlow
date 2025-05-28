const express = require('express');
const router = express.Router();
const timeController = require('../controllers/timeController');
const auth = require('../middleware/auth');

router.use(auth);

router.post('/start', timeController.startTimeTracking);
router.post('/stop', timeController.stopTimeTracking);
router.get('/entries', timeController.getTimeEntries);
router.get('/statistics', timeController.getTimeStatistics);

module.exports = router;

