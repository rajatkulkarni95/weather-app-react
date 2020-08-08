import axios from "axios";

const currentWeather_URI = "https://api.openweathermap.org/data/2.5/";
const API_KEY = process.env.REACT_APP_API_KEY;
const forecastWeather_URI = "https://api.openweathermap.org/data/2.5/forecast?";

export const getCurrentWeather = async (location) => {
  let result = await axios
    .get(`${currentWeather_URI}weather?q=${location}&APPID=${API_KEY}`)
    .then(({ data }) => data);

  return result;
};

export const getWeatherForecast = async (location) => {
  let result = await axios
    .get(`${forecastWeather_URI}q=${location}&appid=${API_KEY}`)
    .then(({ data }) => data);

  return result;
};

export const getWeatherByLocation = (latitude, longitude) => {
  let result = axios
    .get(
      `${currentWeather_URI}weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`
    )
    .then(({ data }) => data);

  return result;
};

export const getForecastByLocation = (latitude, longitude) => {
  let result = axios
    .get(
      `${forecastWeather_URI}lat=${latitude}&lon=${longitude}&appid=${API_KEY}`
    )
    .then(({ data }) => data);

  return result;
};
