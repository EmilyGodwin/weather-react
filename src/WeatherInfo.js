import React from "react";
import FormattedTime from "./FormattedTime";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row">
        <div className="col">
          <div className="currentIcon">
            <i className="fa-solid fa-sun"></i>
          </div>
          <button className="currentTemp temp">
            {Math.round(props.data.temperature)} °F
          </button>
        </div>
        <div className="col">
          <span>
            <div className="currentCity">{props.data.city}</div>
            <ul>
              <li>
                Humidity: <span>{props.data.humidity}</span>%
              </li>
              <li>
                Wind: <span>{props.data.wind}</span> mph
              </li>
            </ul>
          </span>
        </div>
        <div className="col">
          <div className="clock">
            <FormattedTime date={props.data.date} />
          </div>
          <div className="conditions">{props.data.description}</div>
        </div>
      </div>
    </div>
  );
}
