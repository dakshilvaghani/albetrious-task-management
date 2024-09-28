import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import AddTask from "./pages/AddTask";
import EditTask from "./pages/EditTask";
import FilterTasksByDate from "./pages/FilterTaskByDate";
import SingleTask from "./pages/SingleTask";
import fakeTasks from "./data/fakeTasks";
import { useState } from "react";
import { FaBars } from "react-icons/fa";

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div className="w-full mx-auto p-6 relative">
        <nav className="flex items-center justify-between mb-6 bg-white shadow-lg p-4 rounded-lg">
          <div className="flex items-center">
            <span className="text-xl font-bold text-gray-1000">
              Task Manager
            </span>
          </div>

          {/* Hamburger button visible on small screens */}
          <button
            className="text-blue-500 md:hidden block"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <FaBars size={24} />
          </button>

          {/* Main menu visible on medium and larger screens */}
          <div className="hidden md:flex space-x-6">
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

          {/* Mobile menu  */}
          {isMenuOpen && (
            <div className="fixed inset-0 z-50 bg-black bg-opacity-50" onClick={() => setIsMenuOpen(false)}>
              <div
                className="fixed top-0 right-0 w-3/4 max-w-xs h-full bg-white shadow-lg p-6"
                onClick={(e) => e.stopPropagation()} // Prevent closing the menu when clicking inside
              >
                <div className="flex flex-col space-y-4">
                  <Link
                    to="/"
                    className="text-blue-500 hover:text-blue-700"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Home
                  </Link>
                  <Link
                    to="/add"
                    className="text-blue-500 hover:text-blue-700"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Add Task
                  </Link>
                  <Link
                    to="/filter"
                    className="text-blue-500 hover:text-blue-700"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Filter Tasks
                  </Link>
                </div>
              </div>
            </div>
          )}
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
