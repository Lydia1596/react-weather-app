import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function WeatherForecast(props) {
  const [forecastData, setForecastData] = useState(null);
  const [loaded, setLoaded] = useState(false);
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  function handleResponse(response) {
    setForecastData({
      maxTemperature: Math.round(response.data.daily[0].temp.max),
      minTemperature: Math.round(response.data.daily[0].temp.min),
      date: days[new Date(response.data.daily[0].dt * 1000).getDay()],
      description: response.data.daily[0].weather[0].description,
      icon: `https://openweathermap.org/img/wn/${response.data.daily[0].weather[0].icon}@2x.png`,
    });
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="forecast">
        <div className="row">
          <div className="col">
            <ul>
              <li>{forecastData.date}</li>
              <li>
                <img src={forecastData.icon} alt={forecastData.description} />
              </li>
              <li>
                {forecastData.maxTemperature}°C/
                {forecastData.minTemperature}°C
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.coordinates.lat}&lon=${props.coordinates.lon}&appid=6643c7326a4c2a38838264a28531d97e&units=metric`;
    axios.get(url).then(handleResponse);
    return null;
  }
}
