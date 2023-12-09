import React, { useState } from "react";
import axios from "axios";
import Temperature from "./temperature";
import WeatherForecast from "./WeatherForecast";
import FormattedDate from "./FormattedDate";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ loaded: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      loaded: true,
      temperature: Math.round(response.data.main.temp),
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      wind: response.data.wind.speed,
      city: response.data.name,
      coordinates: response.data.coord,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function search() {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a969311cfcbb4a83dfad2cf7478397f9&units=metric`;
    axios.get(url).then(handleResponse);
  }

  if (weatherData.loaded) {
    return (
      <div className="app">
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
        <h1>{weatherData.city}</h1>
        <ul>
          <li className="date-time">
            <FormattedDate date={weatherData.date} />
          </li>
          <li className="conditions">{weatherData.description}</li>
        </ul>
        <div className="row">
          <div className="col">
            <Temperature
              icon={weatherData.icon}
              celsius={weatherData.temperature}
              description={weatherData.description}
            />
          </div>
          <div className="col">
            <ul className="weather-description">
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind: {weatherData.wind}km/h</li>
            </ul>
          </div>
        </div>
        <WeatherForecast coordinates={weatherData.coordinates} />
      </div>
    );
  } else {
    search();
    return <p>Loading...</p>;
  }
}
