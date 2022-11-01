import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="mt-4">
      <small>
        <FormattedDate date={props.data.date} />
      </small>
      <img
        src={props.data.weatherIcon}
        alt={props.data.weatherDescription}
        className="weatherIcon"
      />
      <h1 className="city">{props.data.location}</h1>
      <ul className="currentWeather">
        <li className="temperature">
          {Math.round(props.data.temperature)}
          <span className="units">°F</span>
        </li>
        <li className="weatherDescription">{props.data.weatherDescription}</li>
        <li className="feelsLike">
          Feels like: {Math.round(props.data.feelsLike)}°F
        </li>
        <li className="highLowTemp">
          H: {Math.round(props.data.highTemp)}°F | L:{" "}
          {Math.round(props.data.lowTemp)}°F
        </li>
        <li className="humidity">
          Humidity: {Math.round(props.data.humidity)}%
        </li>
        <li className="wind">Wind: {Math.round(props.data.temperature)} mph</li>
      </ul>
    </div>
  );
}
