const workoutService = require('../services/workoutService');

const getWorkout = async (req, res) => {
    try {
        const { userId } = req.params;
        const workoutPlan = await workoutService.generateWorkout(userId);
        res.json(workoutPlan);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error generating workout plan', error: error.message });
    }
};

const logWorkout = async (req, res) => {
    try {
        const { userId, logs, workoutDate } = req.body;
        await workoutService.logWorkout({ userId, logs, workoutDate });
        res.status(201).json({ message: 'Workout logged successfully!' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error logging workout', error: error.message });
    }
};

module.exports = {
    getWorkout,
    logWorkout,
};

