import React, { useState } from "react";
import FormattedDate from "./FormattedDate";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import axios from "axios";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      city: response.data.name,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      date: new Date(response.data.dt * 1000),
    });
  }
  function search() {
    const apiKey = "12e817575070bcd60eb64f87187b9c19";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div>
        <div className="container">
          <div className="box firstBox">
            <div className="row">
              <div className="col">
                <span className="currentDay">
                  <FormattedDate date={weatherData.date} />
                </span>
              </div>
              <div className="col">
                <span>
                  <form className="searchBar" onSubmit={handleSubmit}>
                    <input
                      type="search"
                      placeholder=" Enter City..."
                      className="searchInput"
                      autoFocus="on"
                      onChange={handleCityChange}
                    />
                    <input type="submit" value="Search" className="button" />
                  </form>
                </span>
              </div>
            </div>
            <WeatherInfo data={weatherData} />
          </div>
          <div className="box secondBox">
            <div className="weatherForecast col">
              <WeatherForecast coordinates={weatherData.coordinates} />
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
