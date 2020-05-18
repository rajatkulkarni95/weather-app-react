import axios from "axios";

const currentWeather_URI = "http://api.openweathermap.org/data/2.5/";
const API_KEY = process.env.REACT_APP_API_KEY;
const forecastWeather_URI =
  "http://api.openweathermap.org/data/2.5/forecast?q=";

export const getCurrentWeather = async (location) => {
  let result = await axios
    .get(`${currentWeather_URI}weather?q=${location}&APPID=${API_KEY}`)
    .then(({ data }) => data);

  return result;
};

export const getWeatherForecast = async (location) => {
  let result = await axios
    .get(`${forecastWeather_URI}${location}&appid=${API_KEY}`)
    .then(({ data }) => data);

  return result;
};
