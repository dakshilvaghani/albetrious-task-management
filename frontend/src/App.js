import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import AddTask from "./pages/AddTask";
import EditTask from "./pages/EditTask";
import FilterTasksByDate from "./pages/FilterTaskByDate";
import SingleTask from "./pages/SingleTask";
import fakeTasks from "./data/fakeTasks";

const App = () => {
  return (
    <>
      <div className="w-full mx-auto p-6">
        <nav className="flex items-center justify-between mb-6 bg-white shadow-lg p-4 rounded-lg">
          <div className="flex items-center">
            <span className="text-xl font-bold text-gray-1000">
              Task Manager
            </span>
          </div>
          <div className="flex space-x-6">
            <Link to="/" className="text-blue-500 hover:text-blue-700">
              Home
            </Link>
            <Link to="/add" className="text-blue-500 hover:text-blue-700">
              Add Task
            </Link>
            <Link to="/filter" className="text-blue-500 hover:text-blue-700">
              Filter Tasks
            </Link>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddTask />} />
          <Route path="/edit/:id" element={<EditTask />} />
          <Route path="/filter" element={<FilterTasksByDate />} />
          <Route path="/tasks/:id" element={<SingleTask tasks={fakeTasks} />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
