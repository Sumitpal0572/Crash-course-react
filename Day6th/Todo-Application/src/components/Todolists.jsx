import React, { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

const TodoList = () => {
  const { todos, removeTodo } = useContext(TodoContext);

  return (
    <div>
      <h2>Todo List</h2>
      <ul>
        {todos.length > 0 ? (
          todos.map((todo, index) => (
            <li key={index}>
              {todo} <button onClick={() => removeTodo(index)}>Remove</button>
            </li>
          ))
        ) : (
          <p>No todos available</p>
        )}
      </ul>
    </div>
  );
};

export default TodoList;
