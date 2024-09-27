import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import TaskForm from "../components/TaskForm";
import { ClipLoader } from "react-spinners"; 

const EditTask = () => {
  const { id } = useParams();
  const [task, setTask] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTask = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BASE_URL}/task/${id}`
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
    return (
      <div className="flex justify-center items-center h-screen">
        <ClipLoader color={"#0000FF"} loading={loading} size={30} />{" "}
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <div className="flex justify-center min-h-screen">
      <div className="w-full md:w-[50%] lg:w-[35%]">
        <h2 className="text-xl font-bold mb-4">Edit Task</h2>
        <TaskForm task={task} />
      </div>
    </div>
  );
};

export default EditTask;
