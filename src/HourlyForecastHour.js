import React from "react";

export default function HourlyForecastHour(props) {
  let forecastWeatherIconCode = props.data.weather[0].icon;
  let weatherIcon = `https://openweathermap.org/img/wn/${forecastWeatherIconCode}@2x.png`;
  let weatherDescription = props.data.weather[0].description;

  function day() {
    let date = new Date(props.data.dt * 1000);
    let hour = date.getHours() % 12 || 12;
    if (hour === 0) {
      return `${12}:00`;
    }

    return `${hour}:00`;
  }

  function temperature() {
    let temperature = props.data.temp;
    return `${Math.round(temperature)}`;
  }

  return (
    <div className="HourlyForecastHour">
      <div className="col">
        {day()}
        <br />
        <img
          src={weatherIcon}
          alt={weatherDescription}
          width="45"
          className="center"
        />
        <br />
        {temperature()}°
      </div>
    </div>
  );
}
