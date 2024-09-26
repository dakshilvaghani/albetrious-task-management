import React from "react";
import { Link } from "react-router-dom";
import Card from "./Card";

const TaskList = ({ tasks }) => {
  console.log(tasks);
  if (!tasks.length || tasks==="undefined") {
    return (
      <div className="ml-5 lg:ml-[125px] xl:ml-[140px] 2xl:ml-[220px]">
        No tasks available.
      </div>
    ); // Handle empty tasks scenario
  }

  return (
    <div className="flex flex-wrap justify-center md:h-[150px] lg:h-[230px] xl:h-[200px]">
      {tasks &&
        tasks.map((task) => (
          <Link
            className="w-full h-full md:w-3/7 lg:w-1/4 md:ml-5 lg:ml-12 md:mb-4 lg:mb-4"
            key={task._id}
            to={`/tasks/${task._id}`}
          >
            <Card task={task} />
          </Link>
        ))}
    </div>
  );
};

export default TaskList;
