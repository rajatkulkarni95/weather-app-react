import React, { useContext, useRef } from "react";
import styled from "styled-components";
import { Button } from "../Button";
import { WeatherContext } from "../../App";
import {
  getCurrentWeather,
  getWeatherForecast,
} from "../../services/weatherAPI";

export const Form = () => {
  const [state, dispatch] = useContext(WeatherContext);
  const inputRef = useRef();

  const handleInput = (event) => {
    event.preventDefault();
    dispatch({ type: "isLoading", payload: true });
    dispatch({
      type: "location",
      payload: inputRef.current.value,
    });

    getCurrentWeather(inputRef.current.value).then((result) =>
      dispatch({ type: "weather", payload: result })
    );
    getWeatherForecast(inputRef.current.value).then((result) =>
      dispatch({ type: "forecast", payload: result })
    );
    dispatch({ type: "isLoading", payload: false });
    inputRef.current.value = "";
  };

  return (
    <form onSubmit={handleInput}>
      <SearchInput type="text" placeholder="Search..." ref={inputRef} />
      <Button background="#3C47E9" color="white" type="submit">
        Search
      </Button>
    </form>
  );
};

const SearchInput = styled.input`
  background: ${(p) => p.theme.colors.elements};
  color: ${(p) => p.theme.colors.textColor};
  border: 1px solid ${(p) => p.theme.colors.textColor};
  font-family: sans-serif;
  width: auto;
  height: auto;
  padding: 8px;
  margin-right: 10px;
`;
