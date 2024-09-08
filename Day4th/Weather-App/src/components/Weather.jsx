import React, { useEffect } from "react";
import "./Weather.css";

const Weather = () => {
  const search = async (city) => {
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${
        import.meta.env.VITE_APP_ID
      }`;

      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
    } catch (error) {}
  };

  useEffect(() => {
    search("London");
  });

  return (
    <div className="weather">
      <div className="search-bar">
        <input type="text" placeholder="Search city" />
      </div>
      <p className="temperature">50 C</p>
      <p className="location">London</p>
      <div className="col">
        <p>91%</p>
        <span>Humidity</span>
      </div>

      <div className="col">
        <p>3.6</p>
        <span>Wind Speed</span>
      </div>
    </div>
  );
};

export default Weather;
