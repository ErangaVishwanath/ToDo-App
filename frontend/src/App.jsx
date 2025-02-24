import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/tasks");
      setTasks(response.data);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  const addTask = async () => {
    if (!title.trim() || !description.trim()) return;
    try {
      await axios.post("http://localhost:5000/api/tasks", {
        title,
        description,
      });
      fetchTasks();
      setTitle("");
      setDescription("");
    } catch (error) {
      console.error("Error adding task:", error);
    }
  };

  const markAsDone = async (id) => {
    try {
      await axios.put(`http://localhost:5000/api/tasks/${id}`);
      fetchTasks();
    } catch (error) {
      console.error("Error marking task as done:", error);
    }
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="w-3/4 bg-white p-6 shadow-md rounded-lg flex">
        <div className="w-1/3 pr-4">
          <h2 className="text-xl font-semibold mb-4">Add a Task</h2>
          <input
            type="text"
            placeholder="Title"
            className="w-full p-2 mb-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            placeholder="Description"
            className="w-full p-2 mb-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
          <button
            onClick={addTask}
            className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
          >
            Add
          </button>
        </div>
        <div className="w-2/3 pl-4 border-l">
          {tasks.map((task) => (
            <div
              key={task.id}
              className="bg-white p-4 mb-3 rounded-lg shadow-sm flex justify-between items-center hover:shadow-md transition-shadow"
            >
              <div>
                <h3 className="font-bold text-gray-800">{task.title}</h3>
                <p className="text-gray-600">{task.description}</p>
              </div>
              <button
                onClick={() => markAsDone(task.id)}
                className={`p-2 rounded focus:outline-none focus:ring-2 transition-colors ${
                  task.completed
                    ? "bg-green-500 text-white cursor-default"
                    : "bg-red-500 text-white hover:bg-red-600 focus:ring-red-500"
                }`}
                disabled={task.completed}
              >
                {task.completed ? "Done" : "Mark as Done"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
