import React from "react";

export default function Weather() {
  return (
    <div>
      <div className="container">
        <div className="box firstBox">
          <div className="topRow row">
            <div className="col">
              <span className="currentDay" id="date">
                Monday
              </span>
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
              <button className="currentTemp temp" id="temperature">
                68°F
              </button>
            </div>
            <div className="col">
              <span>
                <div className="currentCity" id="city">
                  Madison
                </div>
                <ul>
                  <li>
                    Humidity: <span id="humidity"></span>%
                  </li>
                  <li>
                    Wind: <span id="wind"></span> mph
                  </li>
                </ul>
              </span>
            </div>
            <div className="col">
              <div className="clock" id="time">
                2:30 pm
              </div>
              <div className="conditions" id="description">
                Overcast Clouds
              </div>
            </div>
          </div>
          <div className="bottomRow row">
            <button type="button" className="city col rounded" id="london">
              London
            </button>
            <button type="button" className="city col rounded" id="macau">
              Macau
            </button>
            <button type="button" className="city col rounded" id="singapore">
              Singapore
            </button>
            <button type="button" className="city col rounded" id="paris">
              Paris
            </button>
          </div>
        </div>
        <div className="box secondBox">
          <div className="weatherForecast" id="forecast"></div>
        </div>
      </div>
      <footer className="link">
        <a href="https://github.com/EmilyGodwin/weather-react" target="_blank">
          Open-source code
        </a>
        <span>
          {" "}
          by{" "}
          <a href="https://emilygodwin.netlify.app" target="_blank">
            Emily Godwin
          </a>
        </span>
      </footer>
    </div>
  );
}
