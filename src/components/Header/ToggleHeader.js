import React, { useState, useEffect, useContext } from "react";
import Toggle from "react-toggle";
import { RiCelsiusLine, RiFahrenheitLine } from "react-icons/ri";
import { FiSun, FiMoon } from "react-icons/fi";
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
      <DarkModeToggle onChange={setIsDarkMode} checked={isDarkMode} size={60} />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  justify-content: flex-end;
  margin: 20px 30px 0 30px;
`;
