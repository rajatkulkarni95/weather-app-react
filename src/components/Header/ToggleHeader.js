import React, { useContext } from "react";
import { FavoriteButton } from "../Favourites/FavoriteButton";
import styled from "styled-components";
import { WeatherContext } from "../../App";
import { BsMoon } from "react-icons/bs";
import { FiSun, FiGithub } from "react-icons/fi";

export const ToggleHeader = () => {
  const [state, dispatch] = useContext(WeatherContext);

  const handleDarkMode = () => {
    dispatch({ type: "isDarkMode", payload: !state.isDarkMode });
  };

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
      <Toggle onClick={handleDarkMode}>
        {state.isDarkMode ? <BsMoon /> : <FiSun />}
      </Toggle>
      <Link href="https://github.com/rajatkulkarni95/weather-app-react">
        <FiGithub />
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  justify-content: flex-end;
  margin: 20px 30px 0 30px;

  @media (max-width: 700px) {
    justify-content: center;
  }
`;

const DegreeWrapper = styled.div`
  margin-right: 20px;
`;

const CircularBtn = styled.button`
  width: auto;
  padding: 10px 15px;
  height: auto;
  border-none;
  border-radius: 10px;
  color:  ${(p) => p.theme.colors.textColor};
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

const Toggle = styled.button`
  width: auto;
  padding: 10px;
  background: ${(p) => p.theme.colors.favouriteBtn};
  border: 1px solid #1b2329;
  border-radius: 3px;
  color: ${(p) => p.theme.colors.textColor};
  cursor: pointer;

  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.2);
`;

const Link = styled.a`
  background: ${(p) => p.theme.colors.favouriteBtn};
  border: 1px solid #1b2329;
  border-radius: 3px;
  margin-left: 10px;
  padding: 10px;
  :visited,
  :hover,
  :active {
    color: inherit;
  }
`;
