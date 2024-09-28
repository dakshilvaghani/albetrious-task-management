import React, { useState } from "react";
import axios from "axios";
import DatePicker from "../components/DatePicker";
import TaskList from "../components/TaskList";
import ClipLoader from "react-spinners/ClipLoader"; // Import the spinner

const FilterTasks = () => {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedStage, setSelectedStage] = useState(""); // Add stage state
  const [title, setTitle] = useState(""); // Add title state
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false); // Loading state

  // Fetch filtered tasks based on date, stage, and title
  const handleFilterTasks = async () => {
    setLoading(true); 
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/task/filter`,
        {
          params: {
            date: selectedDate,
            stage: selectedStage,
            title: title, 
          },
        }
      );
      setTasks(response.data.tasks);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    } finally {
      setLoading(false); 
    }
  };

  return (
    <div className="w-full ">
      <div className="w-full flex justify-center items-center flex-col">
        <div className="">
        <h2 className="text-xl font-bold mb-4">Filter Tasks</h2>

        {/* Date Filter */}
        <DatePicker
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
            className="w-full"
        />

        {/* Stage Filter */}
        <div className="mt-4">
          <label htmlFor="stage" className="block mb-2">
            Stage:
          </label>
          <select
            id="stage"
            value={selectedStage}
            onChange={(e) => setSelectedStage(e.target.value)}
            className="px-4 py-2 border rounded w-full"
          >
            <option value="">All Stages</option>
            <option value="in progress">In Progress</option>
            <option value="completed">Completed</option>
          </select>
        </div>

        {/* Title Filter */}
        <div className="mt-4">
          <label htmlFor="title" className="block mb-2">
            Title:
          </label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="px-4 py-2 border rounded w-full"
            placeholder="Search by title"
          />
        </div>

        <button
          onClick={handleFilterTasks}
          className="px-4 py-2 bg-blue-500 text-white rounded mt-4 mb-4"
        >
          Submit
        </button>
      </div>

      {/* Loading Spinner */}
      {loading && (
        <div className="flex justify-center mt-10">
          <ClipLoader color="#007bff" loading={loading} size={30} />
        </div>
      )}
            </div>
      {/* Task List */}
      <TaskList tasks={tasks} className="mt-5" />
    </div>
  );
};

export default FilterTasks;
