import React from "react";

export default function DailyForecastDay(props) {
  let forecastWeatherIconCode = props.data.weather[0].icon;
  let weatherIcon = `https://openweathermap.org/img/wn/${forecastWeatherIconCode}@2x.png`;
  let weatherDescription = props.data.weather[0].description;

  function maxTemperature() {
    let tempertature = Math.round(props.data.temp.max);
    return `${tempertature}`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tues", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }

  return (
    <div className="DailyForecastDay">
      <div className="row">
        <div className="col-4">{day()}</div>
        <div className="col-4">
          <img src={weatherIcon} alt={weatherDescription} width="65" className= "dailyForecastWeatherIcon"/>
        </div>
        <div className="col-4">
          <span className="lowForecast">{minTemperature()}°</span> |{" "}
          {maxTemperature()}°
        </div>
      </div>
    </div>
  );
}
