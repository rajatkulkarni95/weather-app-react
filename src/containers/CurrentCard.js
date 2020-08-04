import React from "react";
import styled from "styled-components";
import { SearchHeader } from "../components/Header/SearchHeader";
import { CurrentWeather } from "../components/CurrentWeather";
import { Form } from "../components/FormControl";
import { WeatherContext } from "../App";
import Loader from "react-loader";

export const CurrentCard = () => {
  const [state] = React.useContext(WeatherContext);
  return (
    <Wrapper>
      <SearchHeader />
      {state.isLoading ? "Enter a Location..." : <CurrentWeather />}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  flex: 30%;
  align-items: space-between;
  background: ${(p) => p.theme.colors.elements};
  height: 100%;
  border-radius: 10px;
`;
