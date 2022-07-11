import React from "react";
import "./App.css";
import Weather from "./weather.js";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Weather defaultCity="New York" />
        <footer className="link">
          <a
            href="https://github.com/EmilyGodwin/weather-react"
            target="_blank"
            rel="noreferrer"
          >
            Open-source code
          </a>
          <span>
            {" "}
            by{" "}
            <a
              href="https://emilygodwin.netlify.app"
              target="_blank"
              rel="noreferrer"
            >
              Emily Godwin
            </a>
          </span>
        </footer>
      </header>
    </div>
  );
}
