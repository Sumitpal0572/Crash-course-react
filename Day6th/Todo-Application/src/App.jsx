import "./App.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/Todolists";
import { TodoProvider } from "./context/TodoContext";

function App() {
  return (
    <TodoProvider>
      <div>
        <h1>Todo Application</h1>
        <TodoInput />
        <TodoList />
      </div>
    </TodoProvider>
  );
}

export default App;
