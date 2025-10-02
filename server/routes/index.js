const express = require('express');
const workoutRoutes = require('./workoutRoutes');

const router = express.Router();

// Mount other routes here
router.use(workoutRoutes);

module.exports = router;
