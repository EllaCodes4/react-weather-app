import React, { useState, useEffect } from "react";
import axios from "axios";
import DailyForecastDay from "./DailyForecastDay";
import "./DailyForecast.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";

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
        <h6>
          <FontAwesomeIcon icon={faCalendarDays} /> 7 DAY FORECAST
        </h6>
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
    let apiKey = `3f6be1c407b0d9d1933561808db358ba`;
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=imperial`;
    axios.get(apiURL).then(handleResponse);

    return null;
  }
}
