import React, { useState } from "react";
import { getCurrentWeather, getWeatherForecast } from "./services/weatherAPI";
import { WeatherContainer } from "./components/WeatherContainer";
import { Search } from "./components/Search";

export const App = () => {
  const [state, setState] = useState({
    location: "",
    weather: {},
    forecast: [],
    tempScale: "Celsius",
  });

  const handleInput = (event) => {
    let userInput = event.target.value;
    setState((prevState) => {
      return { ...prevState, location: userInput };
    });
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      getCurrentWeather(state.location).then((response) =>
        setState((prevState) => {
          return { ...prevState, weather: response };
        })
      );

      getWeatherForecast(state.location).then((response) =>
        setState((prevState) => {
          return { ...prevState, forecast: response.list };
        })
      );

      setState((prevState) => {
        return { ...prevState, location: "" };
      });
    }
  };

  return (
    <div className="app">
      <main>
        <Search
          handleInput={handleInput}
          handleKeyPress={handleKeyPress}
          location={state.location}
        />
        <WeatherContainer weather={state.weather} forecast={state.forecast} />
      </main>
    </div>
  );
};
