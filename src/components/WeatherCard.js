import React from "react";

export const WeatherCard = ({ weather }) => {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let date = new Date();
  let currentDay = date.getDay();
  return (
    <section className="weather">
      <p className="weather__city">{weather.name}</p>
      <div>
        <p className="weather__day">
          {days[currentDay]}
          {"—"}
          <span className="weather__date">
            {date.getDate()} {months[date.getMonth()]}
          </span>
        </p>
      </div>
      <div>
        <p className="weather__currentTemp">
          {Math.round(weather.main.temp - 273.15)}°
        </p>
      </div>
      <div className="weather__description">
        <span className="weather__feels">{weather.weather[0].description}</span>
        <span className="weather__range">
          {Math.round(weather.main.temp_max - 273.15)}°—{" "}
          {Math.round(weather.main.temp_min - 273.15)}°
        </span>
      </div>
      <div className="weather__details">
        <span className="weather__details-wind">
          Wind: {weather.wind.speed} km/h
        </span>

        <span className="weather__details-humidity">
          Humidity: {weather.main.humidity}%
        </span>
      </div>
      <div className="upcoming__forecast">
        <span className="upcoming__forecast-header">Hourly</span>
      </div>
    </section>
  );
};
