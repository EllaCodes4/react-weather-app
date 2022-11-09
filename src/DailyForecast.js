import React, { useState } from "react";
import axios from "axios";
import DailyForecastDay from "./DailyForecastDay";

export default function DailyForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [dailyForecast, setDailyForecast] = useState(null);

  function handleResponse(response) {
    setLoaded(true);
    setDailyForecast(response.data.daily[0]);
  }

  if (loaded) {
    return (
      <div className="dailyForecast border border-secondary rounded mt-3">
        <h6>7 Day Forecast*</h6>
        <hr />
        <DailyForecastDay data={dailyForecast} />
        <hr />
      </div>
    );
  } else {
    let apiKey = `ad793a6d772939c31783de5822791acf`;
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=imperial`;
    axios.get(apiURL).then(handleResponse);
    return null;
  }
}
