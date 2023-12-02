import React, { useState } from "react";
import "./Weather.css";

export default function Temperature(props) {
  const [unit, setUnit] = useState("celsius");

  function convertToFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function convertToCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <div className="clearfix">
        <div className="float-left">
          <img
            src={props.icon}
            alt={props.description}
            className="weather-icon"
          />
          <span className="celsiusTemperature">{props.celsius}</span>{" "}
          <span className="unit">
            °C|
            <a href="/" onClick={convertToFahrenheit}>
              °F
            </a>
          </span>
        </div>
      </div>
    );
  } else {
    let fahrenheitTemperature = Math.round((props.celsius * 9) / 5 + 32);
    return (
      <div className="clearfix">
        <div className="float-left">
          <img
            src={props.icon}
            alt={props.description}
            className="weather-icon"
          />
          <span className="fahrenheitTemperature">{fahrenheitTemperature}</span>{" "}
          <span className="unit">
            <a href="/" onClick={convertToCelsius}>
              {" "}
              °C{" "}
            </a>
            | °F
          </span>
        </div>
      </div>
    );
  }
}
