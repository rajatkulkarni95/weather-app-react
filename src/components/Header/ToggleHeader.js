import React, { useState, useEffect, useContext } from "react";
import { FavoriteButton } from "../Favourites/FavoriteButton";

import styled from "styled-components";
import { WeatherContext } from "../../App";
import DarkModeToggle from "react-dark-mode-toggle";

export const ToggleHeader = () => {
  const [state, dispatch] = useContext(WeatherContext);
  const [isDarkMode, setIsDarkMode] = useState(() => true);

  useEffect(() => {
    dispatch({ type: "isDarkMode", payload: isDarkMode });
  }, [isDarkMode]);

  return (
    <Wrapper>
      <FavoriteButton />
      <DegreeWrapper>
        <CircularBtn
          onClick={() => dispatch({ type: "tempScale", payload: "C" })}
        >
          C°
        </CircularBtn>
        <CircularBtn
          onClick={() => dispatch({ type: "tempScale", payload: "F" })}
        >
          F°
        </CircularBtn>
      </DegreeWrapper>
      <DarkModeToggle onChange={setIsDarkMode} checked={isDarkMode} size={60} />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  justify-content: flex-end;
  margin: 20px 30px 0 30px;
`;

const DegreeWrapper = styled.div`
  margin-right: 20px;
`;

const CircularBtn = styled.button`
  width: auto;
  padding: 10px;
  height: auto;
  border-none;
  border-radius: 50%;
  color: white;
  margin-right: 10px;
  cursor: pointer;
  background:${(p) => p.theme.colors.elements};
  border:none;
  font-family: ${(p) => p.theme.font};

  :hover {
    background: ${(p) => p.theme.colors.textColor};
    color: ${(p) => p.theme.colors.background};
  }
`;
