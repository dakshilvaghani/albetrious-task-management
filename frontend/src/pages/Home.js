import React, { useEffect, useState } from "react";
import TaskList from "../components/TaskList";
import axios from "axios";
import { ClipLoader } from "react-spinners";

const Home = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BASE_URL}/task/`
        );
        setTasks(response.data.tasks);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTasks();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <ClipLoader color={"#0000FF"} loading={loading} size={30} />{" "}
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-red-500 text-center">
        Error fetching tasks: {error}
      </div>
    );
  }

  return (
    <div className="">
      <div className="flex justify-center text-gray-900 font-bold mb-4">
        <h2>All Tasks</h2>
      </div>
      <div className="">
        <TaskList tasks={tasks} />
      </div>
    </div>
  );
};

export default Home;
