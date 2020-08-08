import React, { useContext } from "react";
import styled from "styled-components";

import { WeatherCard } from "../components/WeatherCard";
import { WeatherContext } from "../App";
import { StatusCard } from "../components/StatusCard";

export const ForecastCard = () => {
  const [state] = useContext(WeatherContext);
  const { list } = state.forecast;

  return (
    <Wrapper>
      {list ? (
        <>
          <ForecastContainer>
            {list
              .filter((value, index) => index % 8 === 0)
              .map((value) => (
                <WeatherCard key={value.dt} value={value} state={state} />
              ))}
          </ForecastContainer>
          <HighlightCard>
            <h2 style={{ textAlign: "center" }}>Today's Highlights</h2>
            <StatusCard weather={state.weather} />
          </HighlightCard>
        </>
      ) : (
        <LoadingText>Looking out the Window...</LoadingText>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  flex: 70%;
  flex-direction: column;
  background: ${(p) => p.theme.colors.background};
  height: 100%;
  border-radius: 10px;

  @media (max-width: 1000px) {
    flex: 100%;
    flex-direction: column;
    justify-content: space-between;
  }
`;

const ForecastContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin: 0 20px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    margin: 10px;
  }
`;

const HighlightCard = styled.div`
  margin: 40px 20px;

  @media (max-width: 768px) {
    margin: 10px;
  }
`;

const LoadingText = styled.h2`
  position: relative;
  top: 50%;
  left: 50%;
  translate: transform(-50%, -50%);

  @media (max-width: 1000px) {
    display: none;
  }
`;
