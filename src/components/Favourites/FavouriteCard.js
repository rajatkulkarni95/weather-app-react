import React, { useContext } from "react";
import styled from "styled-components";
import { BsArrowRight } from "react-icons/bs";
import { WeatherContext } from "../../App";
import {
  getCurrentWeather,
  getWeatherForecast,
} from "../../services/weatherAPI";

export const FavouriteCard = ({ location, setOpen }) => {
  const [state, dispatch] = useContext(WeatherContext);

  const setWeather = () => {
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

    setOpen(false);
  };

  return (
    <Wrapper onClick={setWeather}>
      {location}
      <BsArrowRight style={{ marginRight: "20px" }} />
    </Wrapper>
  );
};

const Wrapper = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: auto;
  padding: 20px 10px;
  margin-bottom: 30px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background: none;
  color: ${(p) => p.theme.colors.textColor};
  font-size: 1.2rem;

  :hover {
    border: 1px solid ${(p) => p.theme.colors.textColor};
  }
`;
