import { useState } from "react";
import "./App.css";
import Card from "./components/card";
import Input from "./components/input";
import Button from "./components/button";

function App() {
  return (
    <>
      <h2>Weather Forecast</h2>

      <Input />
      <Button value="Search" />
      <Card />
      <Button value="Refresh"/>
    </>
  );
}

export default App;
