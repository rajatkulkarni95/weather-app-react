import { useContext } from "react";
import {
  getWeatherByLocation,
  getForecastByLocation,
} from "../services/weatherAPI";
import { WeatherContext } from "../App";

export const useLocation = () => {
  const [, dispatch] = useContext(WeatherContext);

  const fetchLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        getWeatherByLocation(
          position.coords.latitude,
          position.coords.longitude
        ).then((response) => dispatch({ type: "weather", payload: response }));

        getForecastByLocation(
          position.coords.latitude,
          position.coords.longitude
        ).then((response) => dispatch({ type: "forecast", payload: response }));

        dispatch({ type: "isLoading", payload: false });
      });
    }
  };

  return { fetchLocation };
};
