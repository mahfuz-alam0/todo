import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { statusChanged } from "../Redux/filters/action";

const numberfTodos = (nm_of_todos) => {
    switch (nm_of_todos) {
        case 0:
            return "No tasks";
        case 1:
            return "1 task";
        default:
            return `${nm_of_todos} tasks`;
    }
}

export default function Footer() {

    const dispatch = useDispatch();
    const todos = useSelector((state) => state.todos);

    const todoRemaining = todos.filter((todo) => !todo.completed).length;

    const handleStatusChange = (status) => {
        dispatch(statusChanged(status));
        // switch (status) {
        //     case "all":
        //         return todos;
        //     case "active":
        //         return todos.filter((todo) => !todo.completed);
        //     case "completed":
        //         return todos.filter((todo) => todo.completed);
        //     default:
        //         return todos;
        // }
    }

    return (
        <div className="mt-4 flex justify-between text-xs text-gray-500">
            <p>{numberfTodos(todoRemaining)}</p>
            <ul className="flex space-x-1 items-center text-xs">
                <li className="cursor-pointer font-bold" onClick={() => handleStatusChange("all")}>All</li>
                <li>|</li>
                <li className="cursor-pointer" onClick={() => handleStatusChange("Incomplete")}>Incomplete</li>
                <li>|</li>
                <li className="cursor-pointer" onClick={() => handleStatusChange("Complete")}>Complete</li>
                <li></li>
                <li></li>
                <li className="h-3 w-3 border-2 border-green-500 md:hover:bg-green-500 rounded-full cursor-pointer bg-green-500"></li>
                <li className="h-3 w-3 border-2 border-red-500 md:hover:bg-red-500 rounded-full cursor-pointer"></li>
                <li className="h-3 w-3 border-2 border-yellow-500 md:hover:bg-yellow-500 rounded-full cursor-pointer"></li>
            </ul>
        </div>
    );
}
