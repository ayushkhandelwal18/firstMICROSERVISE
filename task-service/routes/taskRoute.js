const express = require('express');

const { createTask, getAllTasks } = require('../controllers/taskController'); 
const router = express.Router();

// Route to create a new task
router.post('/createtask', createTask);
router.get('/getalltasks', getAllTasks);

module.exports = router;
