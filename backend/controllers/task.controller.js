const db = require("../models");
const Task = db.task;

// Create and Save a new Task
exports.createTask = async (req, res) => {
  if (!req.body.title) {
    res.status(400).send({
      message: "Title can not be empty!",
    });
    return;
  }

  const task = {
    title: req.body.title,
    description: req.body.description,
    completed: req.body.completed ? req.body.completed : false,
  };

  try {
    const data = await Task.create(task);
    res.status(201).json(data);
  } catch (err) {
    res.status(500).json({
      message: err.message || "Some error occurred while creating the Task.",
    });
  }
};

// Get latest 5 Tasks
exports.getTasks = async (req, res) => {
  try {
    const tasks = await Task.findAll({
      limit: 5,
      order: [["createdAt", "DESC"]],
    });
    res.status(200).json(tasks);
  } catch (err) {
    res.status(500).json({
      message: err.message || "Some error occurred while retrieving tasks.",
    });
  }
};

// Mark a Task as completed
exports.completeTask = async (req, res) => {
  try {
    const { id } = req.params;
    const [updated] = await Task.update(
      { completed: true },
      { where: { id } }
    );

    if (updated) {
      return res.status(200).json({ message: "Task marked as completed" });
    } else {
      return res.status(404).json({ message: "Task not found" });
    }
  } catch (error) {
    return res.status(500).json({ error: "Error updating task" });
  }
};

