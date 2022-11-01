import React from "react";

export default function DailyForecast() {
  return (
    <div className="dailyForecast border border-secondary rounded mt-3">
      <h6>7 Day Forecast*</h6>
      <hr />
      <div className="row">
        <div className="col-4">Wed</div>
        <div className="col-4">
          <img
            src="https://openweathermap.org/img/wn/10d@2x.png"
            alt="weather icon"
            width="65"
          />
        </div>
        <div className="col-4">
          <span className="lowForecast">42°</span> | 66°
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col-4">Thu</div>
        <div className="col-4">
          <img
            src="https://openweathermap.org/img/wn/10d@2x.png"
            alt="weather icon"
            width="65"
          />
        </div>
        <div className="col-4">
          <span className="lowForecast">42°</span> | 66°
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col-4">Fri</div>
        <div className="col-4">
          <img
            src="https://openweathermap.org/img/wn/10d@2x.png"
            alt="weather icon"
            width="65"
          />
        </div>
        <div className="col-4">
          <span className="lowForecast">42°</span> | 66°
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col-4">Sat</div>
        <div className="col-4">
          <img
            src="https://openweathermap.org/img/wn/10d@2x.png"
            alt="weather icon"
            width="65"
          />
        </div>
        <div className="col-4">
          <span className="lowForecast">42°</span> | 66°
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col-4">Sun</div>
        <div className="col-4">
          <img
            src="https://openweathermap.org/img/wn/10d@2x.png"
            alt="weather icon"
            width="65"
          />
        </div>
        <div className="col-4">
          <span className="lowForecast">42°</span> | 66°
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col-4">Mon</div>
        <div className="col-4">
          <img
            src="https://openweathermap.org/img/wn/10d@2x.png"
            alt="weather icon"
            width="65"
          />
        </div>
        <div className="col-4">
          <span className="lowForecast">42°</span> | 66°
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col-4">Tue</div>
        <div className="col-4">
          <img
            src="https://openweathermap.org/img/wn/10d@2x.png"
            alt="weather icon"
            width="65"
          />
        </div>
        <div className="col-4">
          <span className="lowForecast">42°</span> | 66°
        </div>
      </div>
    </div>
  );
}
