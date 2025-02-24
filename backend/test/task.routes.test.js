const request = require("supertest");
const express = require("express");
const taskRoutes = require("../routes/task.routes");
const db = require("../models");

const app = express();
app.use(express.json());
app.use("/api/tasks", taskRoutes);

jest.mock("../models");

describe("Task API Endpoints", () => {
  test("Should create a new task", async () => {
    const newTask = { title: "Test Task", description: "Test Description" };

    db.task.create.mockResolvedValue(newTask);

    const response = await request(app).post("/api/tasks").send(newTask);

    expect(response.status).toBe(201);
    expect(response.body.title).toBe(newTask.title);
  });

  test("Should fetch latest tasks", async () => {
    const tasks = [
      {
        id: 1,
        title: "Task 1",
        description: "Description 1",
        completed: false,
      },
      {
        id: 2,
        title: "Task 2",
        description: "Description 2",
        completed: false,
      },
    ];

    db.task.findAll.mockResolvedValue(tasks);

    const response = await request(app).get("/api/tasks");

    expect(response.status).toBe(200);
    expect(response.body.length).toBe(2);
    expect(response.body[0].title).toBe("Task 1");
  });

  test("Should mark a task as done", async () => {
    db.task.update.mockResolvedValue([1]);

    const response = await request(app).put("/api/tasks/1");

    expect(response.status).toBe(200);
    expect(response.body.message).toBe("Task marked as completed");
  });
});
