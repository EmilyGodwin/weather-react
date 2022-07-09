import React, { useState } from "react";
import axios from "axios";

export default function Weather() {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      city: response.data.name,
      description: response.data.weather[0].description,
      date: "Monday",
      time: "2:30 pm",
    });
  }

  if (weatherData.ready) {
    return (
      <div>
        <div className="container">
          <div className="box firstBox">
            <div className="topRow row">
              <div className="col">
                <span className="currentDay">{weatherData.date}</span>
              </div>
              <div className="col">
                <span>
                  <form className="searchBar" id="search-form">
                    <input
                      className="searchInput"
                      type="search"
                      placeholder=" Enter City..."
                      name="search"
                      id="city-input"
                      autoComplete="off"
                    />
                    <input type="submit" value="Search" className="button" />
                  </form>
                </span>
              </div>
            </div>
            <div className="rowTwo row">
              <div className="col">
                <div className="currentIcon">
                  <i className="fa-solid fa-sun"></i>
                </div>
                <button className="currentTemp temp">
                  {Math.round(weatherData.temperature)} °F
                </button>
              </div>
              <div className="col">
                <span>
                  <div className="currentCity">{weatherData.city}</div>
                  <ul>
                    <li>
                      Humidity: <span>{weatherData.humidity}</span>%
                    </li>
                    <li>
                      Wind: <span>{weatherData.wind}</span> mph
                    </li>
                  </ul>
                </span>
              </div>
              <div className="col">
                <div className="clock">{weatherData.time}</div>
                <div className="conditions">{weatherData.description}</div>
              </div>
            </div>
            <div className="bottomRow row">
              <button type="button" className="city col rounded">
                London
              </button>
              <button type="button" className="city col rounded">
                Macau
              </button>
              <button type="button" className="city col rounded">
                Singapore
              </button>
              <button type="button" className="city col rounded">
                Paris
              </button>
            </div>
          </div>
          <div className="box secondBox">
            <div className="weatherForecast"></div>
          </div>
        </div>
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
      </div>
    );
  } else {
    const apiKey = "12e817575070bcd60eb64f87187b9c19";
    let city = "Maple Bluff";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading...";
  }
}
