import React from "react";
import { useWeather } from "../context/Weather";

const Card = () => {
  const weather = useWeather();
  return (
    <div className="card">
      <img src="myimg.png"></img>
      <h2>{weather.current}</h2>
      <h1>London</h1>
    </div>
  );
};

export default Card;
