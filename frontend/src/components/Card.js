import React from "react";

const Card = ({ task }) => {
  return (
   <div
      className={`w-full h-full bg-white rounded-md p-4 mb-4 border border-gray-200 
        ${
          task.stage === "completed"
            ? "shadow-sm shadow-green-400"
            : "shadow-sm shadow-red-400"
        } 
        hover:shadow-md transition-shadow`}
    >
  <h3 className="text-xl font-bold mb-2 text-gray-800">{task.title}</h3>
      <p className="lg:mt-[1.2rem] text-gray-600 mb-4">{task.description}</p>
      <div className="flex justify-between items-center text-gray-500 text-sm">
        <p>
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
      </div>
    </div>
  );
};

export default Card;
