import React, { createContext, useState } from "react";

// Create Context
export const TodoContext = createContext();

// Create Provider Component
export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  // Function to add a new todo
  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  // Function to remove a todo
  const removeTodo = (index) => {
    setTodos(todos.filter((_, todoIndex) => todoIndex !== index));
  };

  return (
    <TodoContext.Provider value={{ todos, addTodo, removeTodo }}>
      {children}
    </TodoContext.Provider>
  );
};
