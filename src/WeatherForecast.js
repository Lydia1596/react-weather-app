import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
  const [forecast, setForecast] = useState(null);
  const [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="forecast">
        <div className="row">
          {forecast.map(function (value, index) {
            if (index < 5) {
              return (
                <div className="col" key={index}>
                  <WeatherForecastDay data={value} />{" "}
                </div>
              );
            }
          })}
        </div>
      </div>
    );
  } else {
    let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.coordinates.lat}&lon=${props.coordinates.lon}&appid=5201594abea9f3e38b70e65b11a80c24&units=metric`;
    axios.get(url).then(handleResponse);
    return null;
  }
}
