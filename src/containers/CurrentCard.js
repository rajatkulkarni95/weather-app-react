import React from "react";
import styled from "styled-components";
import { CurrentWeather } from "../components/CurrentWeather";

export const CurrentCard = () => {
  return (
    <Wrapper>
      <CurrentWeather />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  flex: 30%;
  align-items: space-between;
  background: ${(p) => p.theme.colors.elements};
  height: 100%;
  border-radius: 10px;

  @media (max-width: 1000px) {
    flex: 100%;
    flex-direction: column;
    width:100%
    justify-content: space-between;
  }
`;
