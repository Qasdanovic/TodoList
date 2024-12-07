import React, { useReducer, useState } from "react";
import { FaEdit, FaTrash, FaCheckCircle, FaRegCircle } from "react-icons/fa";
// import Task from "./Task";
import { v4 as uuid } from "uuid";

export default function TodoList() {
  const [inp, setInp] = useState('')


  const reducer = (state, action) => {
    switch (action.type) {
      case "createTask":
        return [...state, { id: uuid(), body:action.body ,done: false, } ]

      case "isDone" :
        const id = action.id;
        return state = state.map(task => {
          return task.id === id ? {...task , done : !task.done} : task
        })


      default:
        return state;
    }
  };

  const [data, dispatch] = useReducer(reducer, []);

  return (
    <div className="container mx-auto p-8 w-2/4 bg-gradient-to-b from-indigo-50 to-white rounded-lg shadow-xl mt-5">
      <h1 className="text-4xl font-extrabold text-center text-indigo-700 mb-6">
        My Todo List
      </h1>
      <form className="flex flex-col gap-4 p-6 bg-white rounded-xl shadow-lg border border-gray-300" onSubmit={(e) => {
        e.preventDefault();
        dispatch({ type: "createTask", body: inp })
        setInp('')
      }}>
        <input
          type="text"
          placeholder="Enter a new task"
          className="w-full px-5 py-3 text-lg text-gray-800 border rounded-lg focus:outline-none focus:ring-4 focus:ring-indigo-300"
          onChange={(e) => setInp(e.target.value)}
          value={inp}
        />
        <button
          type="submit"
          className="w-full px-5 py-3 text-lg font-semibold text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-300 transition duration-200"
          >
          Add Task
        </button>
      </form>

      {data.map((task) => {
        return (
          <div className="flex mt-4 items-center justify-between px-4 py-3 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-200 border border-gray-200">
            <div className="flex items-center gap-3">
              <button
                onClick={() => dispatch({ type: "isDone", id : task.id})}
                className={`text-2xl focus:outline-none hover:scale-110 transition`}>
                {task.done ? <FaCheckCircle /> : <FaRegCircle />}
              </button>
              <span className={`text-lg font-bold ${task.done && 'text-red-600 line-through'}`}>{task.body}</span>
            </div>
            <div className="flex gap-4">
              <button className="text-blue-500 hover:text-blue-600 focus:outline-none transition">
                <FaEdit className="text-xl" />
              </button>
              <button className="text-red-500 hover:text-red-600 focus:outline-none transition">
                <FaTrash className="text-xl" />
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
