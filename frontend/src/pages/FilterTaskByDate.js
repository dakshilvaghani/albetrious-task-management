import React, { useState } from "react";
import axios from "axios";
import DatePicker from "../components/DatePicker";
import TaskList from "../components/TaskList";

const FilterTasksByDate = () => {
  const [selectedDate, setSelectedDate] = useState(
    new Date().toISOString().split("T")[0]
  );
  const [tasks, setTasks] = useState([]);

  const handleFilterTasks = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/task/filter?date=${selectedDate}`
      );
      console.log(response.data);
      setTasks(response.data.tasks);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  return (
    <div>
      <div className="ml-5 lg:ml-[125px] xl:ml-[140px] 2xl:ml-[220px]">
        <h2 className="text-xl font-bold mb-4">Filter Tasks by Date</h2>
        <DatePicker
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
        />
        <button
          onClick={handleFilterTasks}
          className="px-4 py-2 bg-blue-500 text-white rounded mb-4"
        >
          Submit
        </button>
      </div>
      <TaskList tasks={tasks} className="mt-5" />{" "}
    </div>
  );
};

export default FilterTasksByDate;
