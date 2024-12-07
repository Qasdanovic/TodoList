import React, { useReducer } from "react";
import Task from "./Task";

export default function TodoList() {
  const reducer = () => {};

  const [data, dispatch] = useReducer(reducer, []);

  return (
    <div className="container mx-auto p-8 max-w-xl bg-gradient-to-b from-indigo-50 to-white rounded-lg shadow-xl mt-5">
      <h1 className="text-4xl font-extrabold text-center text-indigo-700 mb-6">
        My Todo List
      </h1>
      <form className="flex flex-col gap-4 p-6 bg-white rounded-xl shadow-lg border border-gray-300">
        <input
          type="text"
          placeholder="Enter a new task"
          className="w-full px-5 py-3 text-lg text-gray-800 border rounded-lg focus:outline-none focus:ring-4 focus:ring-indigo-300"
        />
        <button
          type="submit"
          className="w-full px-5 py-3 text-lg font-semibold text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-300 transition duration-200"
        >
          Add Task
        </button>
      </form>
      <div className="mt-8 space-y-4">
        <Task />
        <Task />
        <Task />
      </div>
    </div>
  );
}
