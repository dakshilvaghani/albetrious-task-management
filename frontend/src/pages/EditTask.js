import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import TaskForm from "../components/TaskForm";

const EditTask = () => {
  const { id } = useParams();
  const [task, setTask] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTask = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/task/${id}`
        );
        setTask(response.data.task);
      } catch (err) {
        setError("Task not found!");
      } finally {
        setLoading(false);
      }
    };

    fetchTask();
  }, [id]);

  if (loading) {
    return <p>Loading task...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="w-5/6">
      <h2 className="text-xl font-bold mb-4">Edit Task</h2>
      <TaskForm task={task} />
    </div>
  );
};

export default EditTask;
