const Task = require('../models/taskModel');
const { getChannel } = require('../rabbitmq');


// Create Task
exports.createTask = async (req, res) => {
  try {
    const { title, description, userId } = req.body;

    const newTask = new Task({ title, description, userId });
    await newTask.save();

    const message={
      taskId:newTask._id,
      userId,
      title,
}

   const channel = getChannel();
  if(!channel){
      return res.status(503).json({message:'No channel found'});
  }

  channel.sendToQueue('taskQueue',Buffer.from(
    JSON.stringify(message)));

   
    res.status(201).json(newTask);
  } catch (err) {
    res.status(500).json({ message: 'Internal Server error', error: err.message });
  }
};

// Get All Tasks
exports.getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find();   
    res.status(200).json(tasks);
  } catch (err) {
    res.status(500).json({ message: 'Internal Server error', error: err.message });
  }
};
