import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { ClipLoader } from "react-spinners";

const SingleTask = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [task, setTask] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTask = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BASE_URL}/task/${id}`
        );
        setTask(response.data.task);
      } catch (error) {
        console.error("Error fetching task:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTask();
  }, [id]);

  const handleDelete = async () => {
    try {
      await axios.delete(`${process.env.REACT_APP_BASE_URL}/task/delete/${id}`);
      toast.success("Task deleted successfully!");
      navigate("/");
    } catch (error) {
      console.error("Failed to delete task:", error);
    }
  };

  const getRemainingTime = (dueDate) => {
    const now = new Date();
    const due = new Date(dueDate);
    const remainingTime = due - now;

    if (remainingTime < 0) {
      return { message: "Task is overdue", days: -1 };
    }

    const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (remainingTime % (1000 * 60 * 60)) / (1000 * 60)
    );

    return {
      message: `${days} days, ${hours} hours, and ${minutes} minutes remaining`,
      days,
    };
  };

  const getPriorityLevel = (daysRemaining) => {
    if (daysRemaining < 0) return { level: "High", color: "text-red-600" }; 
    if (daysRemaining <= 2) return { level: "High", color: "text-red-600" }; 
    if (daysRemaining <= 5)
      return { level: "Medium", color: "text-yellow-500" };
    return { level: "Low", color: "text-green-600" };
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <ClipLoader color={"#0000FF"} loading={loading} size={30} />
      </div>
    );
  }

  if (!task) {
    return <div className="text-center text-lg">Task not found.</div>;
  }

  const { message, days } = getRemainingTime(task.date);
  const { level, color } = getPriorityLevel(days);

  return (
    <div className="flex flex-col items-center justify-center h-[600px]">
      <div
        className={`bg-white rounded-md border border-gray-200 p-6 w-full max-w-2xl 
    ${
      task.stage === "completed"
        ? "shadow-lg shadow-green-400"
        : "shadow-lg shadow-red-400"
    }
    hover:shadow-xl hover:shadow-opacity-50 transition-shadow duration-200
  `}
      >
        <div className="p-4">
          <h2 className="text-2xl font-bold mb-4">{task.title}</h2>
          <p className="mb-4">{task.description}</p>
          <p className="mb-4">
            Due Date:{" "}
            <span className="font-medium">
              {new Date(task.date).toLocaleDateString()}
            </span>
          </p>
          {/* Conditionally render remaining time */}
          {task.stage !== "completed" && (
            <p className="mb-4">
              Remaining Time:{" "}
              <span className="font-medium text-red-600">{message}</span>
            </p>
          )}
          <p>
            Stage:{" "}
            <span
              className={`font-medium ${
                task.stage === "completed" ? "text-green-600" : "text-red-600"
              }`}
            >
              {task.stage === "completed" ? "Completed" : "In Progress"}
            </span>
          </p>
          {/* Conditionally render priority level */}
          {task.stage !== "completed" && (
            <p className="mt-4 font-medium">
              Priority Level:
              <span className={`font-medium ${color}`}>{level}</span>
            </p>
          )}
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
      </div>
    </div>
  );
};

export default SingleTask;
