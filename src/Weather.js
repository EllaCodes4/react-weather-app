import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import HourlyForecast from "./HourlyForecast";
import DailyForecast from "./DailyForecast";
import "./Weather.css";
import BackgroundVideo from "./BackgroundVideo";

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({ loaded: false });

  function handleResponse(response) {
    setWeatherData({
      loaded: true,
      date: new Date(response.data.dt * 1000),
      weatherIcon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      location: response.data.name,
      temperature: response.data.main.temp,
      weatherDescription: response.data.weather[0].description,
      feelsLike: response.data.main.feels_like,
      highTemp: response.data.main.temp_max,
      lowTemp: response.data.main.temp_min,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      coordinates: response.data.coord,
      weatherIconCode: response.data.weather[0].icon,
    });
  }

  function search() {
    const apiKey = `39b37e744d3d61db56e033dc0b8a5694`;
    let unit = `imperial`;
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`;
    axios.get(apiURL).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <form onSubmit={handleSubmit} className="SearchEngine mt-3">
      <div className="row">
        <div className="col-8">
          <input
            type="search"
            placeholder="Enter city..."
            autoFocus="on"
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
      This project was coded by: {""}
      <br />
      <a
        href="https://ellacodes.netlify.app/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Gabriella Corales "EllaCodes"
      </a>{" "}
      and is{" "}
      <a
        href="https://github.com/EllaCodes4/react-weather-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        open-sourced on GitHub
      </a>
    </footer>
  );

  if (weatherData.loaded) {
    return (
      <div>
        <div className="Weather">
          <div className="container">
            {form}
            <WeatherInfo data={weatherData} />
            <HourlyForecast coordinates={weatherData.coordinates} />
            <DailyForecast coordinates={weatherData.coordinates} />
            {footer}
          </div>
        </div>
      </div>
    );
  } else {
    search();
    return (
      <div>
        <div className="Weather">
          <div className="container">
            {form}
            {footer}
          </div>
        </div>
      </div>
    );
  }
}
