import react from "react";

export default function FormattedTime(props) {
  let minutes = props.date.getMinutes();

  let hours = [
    "12",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
  ];
  let hour = hours[props.date.getHours()];
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  if (hour < [11]) {
    return (
      <div>
        {hour}:{minutes} AM
      </div>
    );
  } else {
    return (
      <div>
        {hour}:{minutes} PM
      </div>
    );
  }
}
