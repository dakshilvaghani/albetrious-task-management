import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const SingleTask = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [task, setTask] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [updatedTitle, setUpdatedTitle] = useState("");
  const [updatedDescription, setUpdatedDescription] = useState("");
  const [updatedDueDate, setUpdatedDueDate] = useState("");

  // Fetch the task from the backend when the component mounts
  useEffect(() => {
    const fetchTask = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BASE_URL}/task/${id}`
        );
        setTask(response.data.task);
        setUpdatedTitle(response.data.task.title);
        setUpdatedDescription(response.data.task.description);
        setUpdatedDueDate(
          new Date(response.data.task.date).toISOString().substring(0, 10)
        );
      } catch (error) {
        console.error("Error fetching task:", error);
      }
    };

    fetchTask();
  }, [id]);

  // Handle delete operation
  const handleDelete = async () => {
    try {
      await axios.delete(`${process.env.REACT_APP_BASE_URL}/task/delete/${id}`);
      toast.success("Task deleted successfully!");
      navigate("/"); // Redirect to home after deletion
    } catch (error) {
      console.error("Failed to delete task:", error);
    }
  };

  // Handle update operation
  const handleUpdate = async () => {
    const updatedTask = {
      title: updatedTitle,
      description: updatedDescription,
      date: updatedDueDate,
      stage: task.stage,
    };
    try {
      await axios.put(`/api/task/${id}`, updatedTask);
      setIsEditing(false);
    } catch (error) {
      console.error("Failed to update task:", error);
    }
  };

  if (!task) {
    return <div className="text-center text-lg">Task not found.</div>;
  }

  return (
    <div className="flex flex-col items-center justify-center h-[600px] ">
      <div className="bg-white shadow-md rounded-md border border-gray-200 p-6 w-full max-w-2xl">
        {isEditing ? (
          <div>
            <h2 className="text-2xl font-bold mb-4">Edit Task</h2>
            <input
              type="text"
              value={updatedTitle}
              onChange={(e) => setUpdatedTitle(e.target.value)}
              className="border rounded-md p-2 mb-4 w-full"
              placeholder="Task Title"
            />
            <textarea
              value={updatedDescription}
              onChange={(e) => setUpdatedDescription(e.target.value)}
              className="border rounded-md p-2 mb-4 w-full"
              placeholder="Task Description"
              rows="4"
            />
            <input
              type="date"
              value={updatedDueDate}
              onChange={(e) => setUpdatedDueDate(e.target.value)}
              className="border rounded-md p-2 mb-4 w-full"
            />
            <div className="flex justify-between">
              <button
                onClick={handleUpdate}
                className="bg-blue-600 text-white py-2 px-4 rounded-md"
              >
                Save Changes
              </button>
              <button
                onClick={() => setIsEditing(false)}
                className="bg-gray-400 text-white py-2 px-4 rounded-md"
              >
                Cancel
              </button>
            </div>
          </div>
        ) : (
          <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">{task.title}</h2>

            <p className="mb-4">{task.description}</p>
            <p className="mb-4">
              Due Date:{" "}
              <span className="font-medium">
                {new Date(task.date).toLocaleDateString()}
              </span>
            </p>
            <p>
              stage:{" "}
              <span
                className={`font-medium ${
                  task.stage === "completed" ? "text-green-600" : "text-red-600"
                }`}
              >
                {task.stage === "completed" ? "Completed" : "in progress"}
              </span>
            </p>
            <div className="flex justify-between mt-4">
              <Link to={`/edit/${id}`}>
                <button className="bg-yellow-500 text-white py-2 px-4 rounded-md">
                  Edit Task
                </button>
              </Link>
              <button
                onClick={handleDelete}
                className="bg-red-600 text-white py-2 px-4 rounded-md"
              >
                Delete Task
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SingleTask;
