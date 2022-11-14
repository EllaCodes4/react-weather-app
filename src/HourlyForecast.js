import React, { useState, useEffect } from "react";
import axios from "axios";
import HourlyForecastHour from "./HourlyForecastHour";

export default function HourlyForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [hourlyForecast, setHourlyForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  function handleResponse(response) {
    setHourlyForecast(response.data.hourly);
    setLoaded(true);
    console.log(response.data.hourly);
  }

  if (loaded) {
    return (
      <div className="hourlyForecast border border-secondary rounded mt-4">
        <h6>Hourly Forecast</h6>
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
    let apiKey = `6d68aadfacdd4f5163bc273049a0cf2d`;
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=imperial`;
    axios.get(apiURL).then(handleResponse);

    return null;
  }
}
