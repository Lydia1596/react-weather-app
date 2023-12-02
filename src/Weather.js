import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="container">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city..."
              className="search-bar w-100"
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
        <li className="date-time">Saturday 08:02</li>
        <li className="conditions">Mist</li>
      </ul>
      <div className="row">
        <div className="col">
          <div className="clearfix">
            <div className="float-left">
              <img
                src="https://openweathermap.org/img/wn/10d@2x.png"
                alt="description"
                className="weather-icon"
              />
              <span className="temperature">8</span>
              <span className="unit">°C</span>
            </div>
          </div>
        </div>
        <div className="col">
          <ul className="weather-description">
            <li>Humidity: 88%</li>
            <li>Wind: 4.92km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
