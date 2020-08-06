import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { WeatherContext } from "../../App";
import { addToFavourites } from "../../hooks/favourite";
/* import { useFavoriteState } from "../../hooks/favourite"; */

export const FavoriteButton = ({ location }) => {
  const [state, dispatch] = useContext(WeatherContext);

  /*   const addToFavourites = () => {
    let favourites = [...state.favourites];
    favourites.push(state.weather.name);
    dispatch({ type: "favourites", payload: favourites });

    const json = JSON.stringify(state.favourites);
    localStorage.setItem("favourites", json);
  };

  useEffect(() => {
    const json = localStorage.getItem("favourites");
    const favourites = JSON.parse(json);
    if (favourites) {
      dispatch({ type: "favourites", payload: favourites });
    }
  }, [state.favourites]); */

  return (
    <AddFavourite>
      <AiOutlineHeart /> Add to favourites
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

  :active {
    background: #ff4040;
    color: #ffffff;
  }
`;
