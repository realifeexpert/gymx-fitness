const express = require('express');
const workoutController = require('../controllers/workoutController');

const router = express.Router();

// GET /api/workout/:userId - Generates and returns a new workout plan.
router.get('/workout/:userId', workoutController.getWorkout);

// POST /api/log-workout - Saves a completed workout to the database.
router.post('/log-workout', workoutController.logWorkout);

module.exports = router;
