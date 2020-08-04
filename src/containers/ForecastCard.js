import React from "react";
import styled from "styled-components";
import { ToggleHeader } from "../components/Header/ToggleHeader";

export const ForecastCard = () => (
  <Wrapper>
    <ToggleHeader />
  </Wrapper>
);

const Wrapper = styled.div`
  flex: 70%;
  background: ${(p) => p.theme.colors.background};
  height: 100%;
  border-radius: 10px;
`;
