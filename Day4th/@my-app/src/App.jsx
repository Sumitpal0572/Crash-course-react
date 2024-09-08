// import { useState } from "react";
import "./App.css";
import Card from "./components/card";
import Input from "./components/input";
import Button from "./components/button";
import { useWeather } from "./context/Weather";

function App() {
  const weather = useWeather();
  console.log(weather);
  return (
    <>
      <h2>Weather Forecast</h2>

      <Input />
      <Button onClick={weather.fetchData} value="Search" />
      <Card />
      <Button value="Refresh" />
    </>
  );
}

export default App;
