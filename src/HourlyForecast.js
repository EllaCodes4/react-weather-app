import React, { useState, useEffect } from "react";
import axios from "axios";
import HourlyForecastHour from "./HourlyForecastHour";
import "./HourlyForecast.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";

export default function HourlyForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [hourlyForecast, setHourlyForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  function handleResponse(response) {
    setHourlyForecast(response.data.hourly);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="hourlyForecast  mt-4">
        <h6>
          <FontAwesomeIcon icon={faClock} /> HOURLY FORECAST
        </h6>
        <div className="row">
          {hourlyForecast.map(function(hourlyForecast, index) {
            if (index < 4) {
              return (
                <div className="col" key={index}>
                  <HourlyForecastHour data={hourlyForecast} />
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
    let apiKey = `eae061c95483dd066657bfc7525418ed`;
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=imperial`;
    axios.get(apiURL).then(handleResponse);

    return null;
  }
}
