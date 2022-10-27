import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  const [city, setCity] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [weather, setWeather] = useState({});

  function displayWeather(response) {
    setLoaded(true);
    console.log(response.data);
    setWeather({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      weatherIcon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      weatherDescription: response.data.weather[0].description,
      location: response.data.name,
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
      This project was coded by {""}
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

  if (loaded) {
    return (
      <div className="Weather">
        {form}
        <ul className="mt-3">
          <li>Wed, Oct 26, 7:03*</li>
          <img
            src={weather.weatherIcon}
            alt={weather.weatherDescription}
            className="weatherIcon"
          />
          <li className="city">{weather.location}</li>
          <li className="temperature">{Math.round(weather.temperature)}°F</li>
          <li className="weatherDescription">{weather.weatherDescription}</li>
          <li className="feelsLike">Feels like: 39°F*</li>
          <li className="highLowTemp">H: 46°F | L: 42°F*</li>
          <li className="humidity">
            Humidity: {Math.round(weather.humidity)}%
          </li>
          <li className="wind">Wind: {Math.round(weather.temperature)} mph</li>
        </ul>
        <div className="hourlyForecast border border-secondary rounded mt-4">
          <div>Hourly Forecast*</div>
          <div className="row">
            <div className="col-3">
              7:00
              <br />
              <img src={weather.weatherIcon} alt={weather.weatherDescription} />
              <br />
              44°
            </div>
            <div className="col-3">
              8:00
              <br />
              <img src={weather.weatherIcon} alt={weather.weatherDescription} />
              <br />
              44°
            </div>
            <div className="col-3">
              9:00
              <br />
              <img src={weather.weatherIcon} alt={weather.weatherDescription} />
              <br />
              44°
            </div>
            <div className="col-3">
              10:00
              <br />
              <img src={weather.weatherIcon} alt={weather.weatherDescription} />
              <br />
              44°
            </div>
          </div>
        </div>
        <div className="dailyForecast border border-secondary rounded mt-3">
          <div>7 Day Forecast*</div>
          <hr />
          <div className="row">
            <div className="col-4">Wed</div>
            <div className="col-4">
              <img
                src="https://openweathermap.org/img/wn/10d@2x.png"
                alt="weather icon"
              />
            </div>
            <span className="col-4">42° | 66°</span>
          </div>
          <hr />
          <div className="row">
            <div className="col-4">Thu</div>
            <div className="col-4">
              <img
                src="https://openweathermap.org/img/wn/10d@2x.png"
                alt="weather icon"
              />
            </div>
            <span className="col-4">42° | 66°</span>
          </div>
          <hr />
          <div className="row">
            <div className="col-4">Fri</div>
            <div className="col-4">
              <img
                src="https://openweathermap.org/img/wn/10d@2x.png"
                alt="weather icon"
              />
            </div>
            <span className="col-4">42° | 66°</span>
          </div>
          <hr />
          <div className="row">
            <div className="col-4">Sat</div>
            <div className="col-4">
              <img
                src="https://openweathermap.org/img/wn/10d@2x.png"
                alt="weather icon"
              />
            </div>
            <span className="col-4">42° | 66°</span>
          </div>
          <hr />
          <div className="row">
            <div className="col-4">Sun</div>
            <div className="col-4">
              <img
                src="https://openweathermap.org/img/wn/10d@2x.png"
                alt="weather icon"
              />
            </div>
            <span className="col-4">42° | 66°</span>
          </div>
          <hr />
          <div className="row">
            <div className="col-4">Mon</div>
            <div className="col-4">
              <img
                src="https://openweathermap.org/img/wn/10d@2x.png"
                alt="weather icon"
              />
            </div>
            <span className="col-4">42° | 66°</span>
          </div>
          <hr />
          <div className="row">
            <div className="col-4">Tue</div>
            <div className="col-4">
              <img
                src="https://openweathermap.org/img/wn/10d@2x.png"
                alt="weather icon"
              />
            </div>
            <span className="col-4">42° | 66°</span>
          </div>
        </div>
        {footer}
      </div>
    );
  } else {
    return (
      <div className="Weather">
        {form}
        {footer}
      </div>
    );
  }
}
