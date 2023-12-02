import React from "react";
import axios from "axios";
import "./Weather.css";
import { useState } from "react";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ loaded: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      loaded: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }

  function search() {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a969311cfcbb4a83dfad2cf7478397f9&units=metric`;
    axios.get(url).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.loaded) {
    return (
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city..."
                className="search-bar w-100"
                onChange={handleCityChange}
              />
            </div>{" "}
            <div className="col-3">
              <input
                type="submit"
                className="btn btn-primary w-100"
                value="Search"
              />
            </div>
          </div>
        </form>
        <h1>New York</h1>
        <ul>
          <li className="date-time">{props.weatherData.date}</li>
          <li className="conditions">{props.weatherData.description}</li>
        </ul>
        <div className="row">
          <div className="col">
            <div className="clearfix">
              <div className="float-left">
                <img
                  src="https://openweathermap.org/img/wn/10d@2x.png"
                  alt={props.weatherData.description}
                  className="weather-icon"
                />
                <span className="temperature">
                  {props.weatherData.temperature}
                </span>
                <span className="unit">°C</span>
              </div>
            </div>
          </div>
          <div className="col">
            <ul className="weather-description">
              <li>`Humidity: ${props.weatherData.humidity}%`</li>
              <li>`Wind: ${props.weatherData.wind}km/h`</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    search();
    return <p>Loading...</p>;
  }
}
