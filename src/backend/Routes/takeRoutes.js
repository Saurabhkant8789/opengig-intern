// routes/taskRoutes.js

const express = require('express');
const router = express.Router();
const Task = require('./models/Task');

// Get all tasks
router.get('/', async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Create a task
router.post('/', async (req, res) => {
  try {
    const task = new Task(req.body);
    await task.save();
    res.status(201).json(task);
  } catch (error) {
    res.status(400).json({ message: 'Invalid data' });
  }
});

// Update a task
router.put('/:id', async (req, res) => {
  try {
    await Task.findByIdAndUpdate(req.params.id, req.body);
    res.json({ message: 'Task updated successfully' });
  } catch (error) {
    res.status(400).json({ message: 'Invalid data' });
  }
});

// Delete a task
router.delete('/:id', async (req, res) => {
  try {
    await Task.findByIdAndDelete(req.params.id);
    res.json({ message: 'Task deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
