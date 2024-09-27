import React from "react";
import TaskForm from "../components/TaskForm";

const AddTask = () => {
  return (
   <div className="flex justify-center min-h-screen">
      <div className="w-full md:w-[50%] lg:w-[35%]">
        <h2 className="text-xl font-bold mb-4">Add New Task</h2>
        <TaskForm />
      </div>
    </div>
  );
};

export default AddTask;
