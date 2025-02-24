const express = require("express");
const router = express.Router();
const tasks = require("../controllers/task.controller");

// Create a new Task
router.post("/", tasks.createTask);

// Retrieve all Tasks
router.get("/", tasks.getTasks);

// Mark a Task as completed
router.put("/:id", tasks.completeTask);

module.exports = router;