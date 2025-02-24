import { render, screen, fireEvent } from "@testing-library/react";
import App from "../App";
import axios from "axios";
// import jest from 'jest-mock'; // Remove this line
import { describe, test, expect } from '@jest/globals';

import { jest } from '@jest/globals';

jest.mock("axios");

describe("To-Do App", () => {
  test("renders input fields and add button", () => {
    render(<App />);

    expect(screen.getByPlaceholderText("Title")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Description")).toBeInTheDocument();
    expect(screen.getByText("Add")).toBeInTheDocument();
  });

  test("allows users to add a new task", async () => {
    render(<App />);

    axios.post.mockResolvedValue({
      data: {
        id: 1,
        title: "New Task",
        description: "Test task",
        completed: false,
      },
    });

    fireEvent.change(screen.getByPlaceholderText("Title"), {
      target: { value: "New Task" },
    });
    fireEvent.change(screen.getByPlaceholderText("Description"), {
      target: { value: "Test task" },
    });

    fireEvent.click(screen.getByText("Add"));

    expect(axios.post).toHaveBeenCalledWith("http://localhost:5000/api/tasks", {
      title: "New Task",
      description: "Test task",
    });
  });

  test("marks a task as done", async () => {
    axios.get.mockResolvedValue({
      data: [
        {
          id: 1,
          title: "Test Task",
          description: "Description",
          completed: false,
        },
      ],
    });

    render(<App />);

    axios.put.mockResolvedValue({});

    fireEvent.click(screen.getByText("Mark as Done"));

    expect(axios.put).toHaveBeenCalledWith("http://localhost:5000/api/tasks/1");
  });
});
