import React from "react";
import FormattedTime from "./FormattedTime";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row">
        <div className="col">
          <div className="currentIcon">
            <WeatherIcon code={props.data.icon} size={180} />
          </div>
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
              <li>{Math.round(props.data.temperature)} °F</li>
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
