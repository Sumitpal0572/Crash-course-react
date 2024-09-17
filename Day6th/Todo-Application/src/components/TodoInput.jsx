import React, { useContext, useState } from "react";
import { TodoContext } from "../context/TodoContext";

const TodoInput = () => {
  const [inputValue, setInputValue] = useState("");
  const { addTodo } = useContext(TodoContext);

  const handleAddTodo = () => {
    if (inputValue.trim()) {
      addTodo(inputValue.trim());
      setInputValue("");
    }
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter a todo"
      />
      <button onClick={handleAddTodo}>Add Todo</button>
    </div>
  );
};

export default TodoInput;
