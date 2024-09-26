import React from "react";
import TaskForm from "../components/TaskForm";

const AddTask = () => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Add New Task</h2>
      <TaskForm />
    </div>
  );
};

export default AddTask;
