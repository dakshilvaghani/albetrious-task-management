import React, { useEffect, useState } from "react";
import TaskList from "../components/TaskList";
import axios from "axios";

const Home = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        console.log(process.env.REACT_APP_BASE_URL);
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
    return <div>Loading tasks...</div>;
  }

  if (error) {
    return <div>Error fetching tasks: {error}</div>;
  }

  return (
    <div className="">
      <div className="flex justify-center text-gray-900 font-bold mb-4">
        <h2>All Task </h2>
      </div>
      <div className="">
        <TaskList tasks={tasks} />
      </div>
    </div>
  );
};

export default Home;
