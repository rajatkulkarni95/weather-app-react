import { getWeatherForecast, getCurrentWeather } from "../services/weatherAPI";

export const handleLocation = (location, dispatch) => {
  dispatch({ type: "isLoading", payload: true });

  dispatch({
    type: "location",
    payload: location,
  });

  getCurrentWeather(location).then((result) =>
    dispatch({ type: "weather", payload: result })
  );
  getWeatherForecast(location).then((result) =>
    dispatch({ type: "forecast", payload: result })
  );

  dispatch({ type: "isLoading", payload: false });
};
