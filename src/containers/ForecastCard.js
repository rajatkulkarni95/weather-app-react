import React, { useContext } from "react";
import styled from "styled-components";
import { ToggleHeader } from "../components/Header/ToggleHeader";
import { WeatherCard } from "../components/WeatherCard";
import { WeatherContext } from "../App";
import { StatusCard } from "../components/StatusCard";

export const ForecastCard = () => {
  const [state] = useContext(WeatherContext);
  const { list } = state.forecast;

  return (
    <Wrapper>
      <ToggleHeader />
      {list ? (
        <>
          <ForecastContainer>
            {list
              .filter((value, index) => index % 8 === 0)
              .map((value) => (
                <WeatherCard key={value.dt} value={value} />
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
  overflow: hidden;
`;

const ForecastContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin: 40px 20px;
`;

const HighlightCard = styled.div`
  margin: 40px 20px;
`;

const LoadingText = styled.h2`
  position: absolute;
  top: 48%;
  left: 55%;
`;
