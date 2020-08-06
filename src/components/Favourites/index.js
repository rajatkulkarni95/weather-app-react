import React, { useContext } from "react";
import styled from "styled-components";
import { FavouriteCard } from "../Favourites/FavouriteCard";
import { WeatherContext } from "../../App";

export const FavouritesMenu = ({ open }) => {
  const [state] = useContext(WeatherContext);
  return (
    <StyledMenu open={open}>
      <Wrapper>
        <Header>Favourite Locations</Header>
        {state.favourites.length === 0 ? (
          <h3>No Favourites Saved</h3>
        ) : (
          state.favourites.map((city) => (
            <FavouriteCard key={city} location={city} />
          ))
        )}
      </Wrapper>
    </StyledMenu>
  );
};

const StyledMenu = styled.nav`
  flex: 30%;
  flex-direction: column;
  justify-content: center;
  background: ${({ theme }) => theme.colors.elements};
  height: 100%;
  width: 30%;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  transform: translateX(-100%);
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};

  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
  }
`;

const Wrapper = styled.div`
  margin-top: 30px;
`;

const Header = styled.h2`
  margin: 20px 0 20px 0;
`;
