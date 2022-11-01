import React, { useState } from "react";
import "./Temperature.css";

export default function Temperature(props) {
  const [unit, setUnit] = useState("fahrenheit");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function celsius() {
    return ((props.fahrenheit - 32) * 5) / 9;
  }
  if (unit === "fahrenheit") {
    return (
      <li className="temperature">
        {Math.round(props.fahrenheit)}
        <span className="units">
          <a href="/" onClick={showFahrenheit} className="active">
            °F
          </a>{" "}
          |{" "}
          <a href="/" onClick={showCelsius} className="text-decoration-none">
            °C
          </a>{" "}
        </span>
      </li>
    );
  } else {
    return (
      <li className="temperature">
        {Math.round(celsius())}
        <span className="units">
          <a href="/" onClick={showFahrenheit} className="text-decoration-none">
            °F
          </a>{" "}
          |{" "}
          <a href="/" onClick={showCelsius} className="active">
            °C
          </a>{" "}
        </span>
      </li>
    );
  }
}
