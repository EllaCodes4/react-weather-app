import React from "react";
import FormattedDate from "./FormattedDate";
import Temperature from "./Temperature";
import "./WeatherInfo.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDay } from "@fortawesome/free-solid-svg-icons";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo mt-4">
      <small>
        <span>
          <FontAwesomeIcon icon={faCalendarDay} />{" "}
          <FormattedDate date={props.data.date} />
        </span>
      </small>
      <img
        src={props.data.weatherIcon}
        alt={props.data.weatherDescription}
        className="weatherIcon"
      />
      <h1 className="city">{props.data.location}</h1>
      <ul className="currentWeather">
        <Temperature fahrenheit={props.data.temperature} />
        <li className="weatherDescription">{props.data.weatherDescription}</li>

        <li className="highLowTemp">
          H: {Math.round(props.data.highTemp)}°F | L:{" "}
          {Math.round(props.data.lowTemp)}°F
        </li>
        <li className="feelsLike">
          Feels like: {Math.round(props.data.feelsLike)}°F
        </li>
        <li className="humidity">
          Humidity: {Math.round(props.data.humidity)}%
        </li>
        <li className="wind">Wind: {Math.round(props.data.wind)} mph</li>
      </ul>
    </div>
  );
}
