import { useState } from "react";
import "./App.css";

function TodoApp() {
  const [todos, setTodos] = useState([]);
}

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>TODO APP</h1>
      <input type="text" placeholder="search text here" />
      <button onClick={handleAddTodo}>Add</button>
    </>
  );
}

export default App;
