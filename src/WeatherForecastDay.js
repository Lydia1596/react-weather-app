import React from "react";
import "./Weather.css";

export default function WeatherForecastDay(props) {
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let maxTemperature = Math.round(props.data.temp.max);
  let minTemperature = Math.round(props.data.temp.min);
  let date = days[new Date(props.data.dt * 1000).getDay()];
  let description = props.data.weather[0].description;
  let icon = `https://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`;

  return (
    <ul>
      <li>{date}</li>
      <li>
        <img src={icon} alt={description} className="forecast-icon" />
      </li>
      <li>
        {maxTemperature}°C/
        {minTemperature}°C
      </li>
    </ul>
  );
}
