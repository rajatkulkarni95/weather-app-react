import React from "react";

export const WeatherForecast = ({ forecast }) => {
  console.log(forecast);
  let time = parseInt(forecast.dt_txt.slice(11, 13));
  let timeText = "";
  if (time - 12 > 0) {
    timeText = `${time - 12} PM`;
  } else if (time === 0) {
    timeText = `12 AM`;
  } else {
    timeText = `${time} AM`;
  }
  return (
    <div className="hourly-forecast">
      <div>{timeText}</div>
      <div>{forecast.weather[0].main}</div>
      <div>{forecast.main.humidity}%</div>
      <div>{Math.round(forecast.main.temp - 273.15)}</div>
    </div>
  );
};
