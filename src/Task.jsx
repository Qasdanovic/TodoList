import React from "react";
import { FaEdit, FaTrash, FaCheckCircle, FaRegCircle } from "react-icons/fa";

function Task() {
  return (
    <div className="flex items-center justify-between px-4 py-3 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-200 border border-gray-200">
      <div className="flex items-center gap-3">
        <button
          className={`text-2xl focus:outline-none hover:scale-110 transition`}
        >
          {/* {isDone ? <FaCheckCircle /> : <FaRegCircle />} */}
        </button>
        <span
          className={`text-lg`}
        >
          task
        </span>
      </div>
      <div className="flex gap-4">
        <button
          className="text-blue-500 hover:text-blue-600 focus:outline-none transition"
        >
          <FaEdit className="text-xl" />
        </button>
        <button
          className="text-red-500 hover:text-red-600 focus:outline-none transition"
        >
          <FaTrash className="text-xl" />
        </button>
      </div>
    </div>
  );
}

export default Task;
