import "./App.css";
import React from "react";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h2 className="mt-3">
          <span role="img" aria-label="construction emoji">
            🚧
          </span>{" "}
          Under Construction
          <span role="img" aria-label="construction emoji">
            🚧
          </span>
        </h2>
        <Weather />
      </div>
    </div>
  );
}
