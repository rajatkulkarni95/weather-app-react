import React from "react";
import { WeatherCard } from "../components/WeatherCard";
import { WeatherForecast } from "./WeatherForecast";

export const WeatherContainer = ({ weather, forecast }) => {
  return (
    <>
      {typeof weather.name != "undefined" ? (
        <WeatherCard weather={weather} />
      ) : (
        false
      )}
      {forecast.length !== 0
        ? forecast
            .slice(0, 5)
            .map((singleForecast) => (
              <WeatherForecast
                forecast={singleForecast}
                key={singleForecast.dt}
              />
            ))
        : false}
    </>
  );
};
