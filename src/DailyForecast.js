import React, { useState, useEffect } from "react";
import axios from "axios";
import DailyForecastDay from "./DailyForecastDay";

export default function DailyForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [dailyForecast, setDailyForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  function handleResponse(response) {
    setDailyForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="dailyForecast border border-secondary rounded mt-3">
        <h6>7 Day Forecast</h6>
        <hr className="ms-1 ps-1" />
        <div className="row">
          {dailyForecast.map(function(dailyForecast, index) {
            if (index < 7) {
              return (
                <div className="row" key={index}>
                  <DailyForecastDay data={dailyForecast} />
                  <hr className="ms-3 ps-0" />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    let apiKey = `97f8e93f00107773f88eafd933ce86b7`;
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=imperial`;
    axios.get(apiURL).then(handleResponse);

    return null;
  }
}
