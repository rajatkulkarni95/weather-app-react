import React, { useContext } from "react";
import styled, { css } from "styled-components";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { WeatherContext } from "../../App";
import { useFavourites } from "../../hooks/favourite";

export const FavoriteButton = () => {
  const [state] = useContext(WeatherContext);
  const { setFavourites } = useFavourites();

  const isFavourite = state.favourites.includes(state.weather.name);

  return (
    <AddFavourite onClick={setFavourites} isFavourite={isFavourite}>
      {isFavourite ? (
        <>
          <AiFillHeart /> Added{" "}
        </>
      ) : (
        <>
          <AiOutlineHeart /> Add to Favourites{" "}
        </>
      )}
    </AddFavourite>
  );
};

const AddFavourite = styled.button`
  width: auto;
  padding: 10px;
  background: ${(p) => p.theme.colors.favouriteBtn};
  border: 1px solid #1b2329;
  border-radius: 3px;
  color: ${(p) => p.theme.colors.textColor};
  margin-right: 20px;
  font-family: ${(p) => p.theme.font};

  :hover {
    border: 1px solid #ff4040;
  }

  ${(p) =>
    p.isFavourite &&
    css`
      background: #ff4040;
      color: #ffffff;
    `}
`;
