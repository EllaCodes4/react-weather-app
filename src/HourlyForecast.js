import React from "react";

export default function HourlyForecast(props) {
  return (
    <div className="hourlyForecast border border-secondary rounded mt-4">
      <h6>Hourly Forecast*</h6>
      <div className="row">
        <div className="col-3">
          7:00
          <br />
          <img
            src={props.data.weatherIcon}
            alt={props.data.weatherDescription}
            width="45"
          />
          <br />
          44°
        </div>
        <div className="col-3">
          8:00
          <br />
          <img
            src={props.data.weatherIcon}
            alt={props.data.weatherDescription}
            width="45"
          />
          <br />
          44°
        </div>
        <div className="col-3">
          9:00
          <br />
          <img
            src={props.data.weatherIcon}
            alt={props.data.weatherDescription}
            width="45"
          />
          <br />
          44°
        </div>
        <div className="col-3">
          10:00
          <br />
          <img
            src={props.data.weatherIcon}
            alt={props.data.weatherDescription}
            width="45"
          />
          <br />
          44°
        </div>
      </div>
    </div>
  );
}
