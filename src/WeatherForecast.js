import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {}

  let apiKey = "12e817575070bcd60eb64f87187b9c19";
  let longitude = props.coordinates.lon;
  let latitude = props.coordinates.lat;
  let apiUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=imperial`;

  axios.get(apiUrl).then(handleResponse);
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Thursday</div>
          <div className="icon">
            <WeatherIcon code="01d" size={80} className="icon" />
          </div>
          <div className="WeatherForecast-temperature">
            <span className="WeatherForecast-temperature-max">19</span>{" "}
            <span className="WeatherForecast-temperature-min">10</span>
          </div>
        </div>
      </div>
    </div>
  );
}
