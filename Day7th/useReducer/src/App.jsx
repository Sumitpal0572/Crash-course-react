import { useReducer } from "react";
import { themeReducer, initialState } from "./themeReducer";
import "./App.css";

function App() {
  const [state, dispatch] = useReducer(themeReducer, initialState);

  const toggleTheme = () => {
    dispatch({ type: "TOGGLE_THEME" });
  };

  return (
    <div
      style={{
        backgroundColor: state.theme === "light" ? "#fff" : "#333",
        color: state.theme === "light" ? "#000" : "#fff",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className={"app ${state.theme}"}>
        <h1>
          {state.theme.charAt(0).toUpperCase() + state.theme.slice(1)}Mode
        </h1>
        <button onClick={toggleTheme}>Toggle Theme</button>
      </div>
    </div>
  );
}

export default App;
