import React from "react";
import styled from "styled-components";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
/* import { useFavoriteState } from "../../hooks/favourite"; */

export const FavoriteButton = ({ location }) => {
  /* const [isFavorite, { toggle }] = useFavoriteState(location); */
  return (
    <AddFavourite>
      <AiOutlineHeart /> Add to favourites
    </AddFavourite>
  );
};

const AddFavourite = styled.button`
  width: auto;
  padding: 10px;
  background: #0a1014;
  border: 1px solid #1b2329;
  border-radius: 3px;
  color: #ffffff;
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
