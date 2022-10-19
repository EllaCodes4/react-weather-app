import React, { useState } from "react";
import axios from "axios";
import "./WeatherSearch.css";

export default function WeatherSearch() {
  const [city, setCity] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [weather, setWeather] = useState({});

  function displayWeather(response) {
    setLoaded(true);
    setWeather({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      weatherIcon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      weatherDescription: response.data.weather[0].description,
    });
  }

  function handleSearch(event) {
    event.preventDefault();
    let apiKey = `39b37e744d3d61db56e033dc0b8a5694`;
    let unit = `imperial`;
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`;
    axios.get(apiURL).then(displayWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <form onSubmit={handleSearch} className="SearchEngine mt-3">
      <div className="row">
        <div className="col-8">
          <input
            type="search"
            placeholder="Enter city..."
            autoFocus={true}
            onChange={updateCity}
            className="form-control"
          />
        </div>
        <div className="col-2">
          <input type="submit" value="Search" className="btn btn-primary" />
        </div>
      </div>
    </form>
  );

  let footer = (
    <footer className="mt-4">
      <a
        href="https://github.com/EllaCodes4/react-weather-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        Open source coded
      </a>{" "}
      by:{" "}
      <a
        href="https://ellacodes.netlify.app/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Gabriella Corales ("EllaCodes")
      </a>
    </footer>
  );

  if (loaded) {
    return (
      <div className="container Weather">
        {form}
        <ul>
          <img
            src={weather.weatherIcon}
            alt={weather.weatherDescription}
            className="weatherIcon"
          />
          <li className="city">{city}</li>
          <li className="temperature">{Math.round(weather.temperature)}°F</li>
          <li className="weatherDescription">{weather.weatherDescription}</li>
          <li className="humidity">
            Humidity: {Math.round(weather.humidity)}%
          </li>
          <li className="wind">Wind: {Math.round(weather.temperature)} mph</li>
        </ul>
        {footer}
      </div>
    );
  } else {
    return (
      <div className="container Weather">
        {form}
        {footer}
      </div>
    );
  }
}
