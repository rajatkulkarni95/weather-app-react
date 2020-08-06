import React, { useEffect } from "react";
import styled from "styled-components";
import { useLocation } from "../hooks/location";
import { CurrentCard } from "./CurrentCard";
import { ForecastCard } from "./ForecastCard";

export const Container = () => {
  const { fetchLocation } = useLocation();

  useEffect(() => {
    fetchLocation();
  }, []);

  return (
    <Wrapper>
      <CurrentCard />
      <ForecastCard />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;

  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  background: ${(p) => p.theme.colors.background};
`;
