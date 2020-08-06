import React, { useState } from "react";
import styled from "styled-components";
import { useLocation } from "../../hooks/location";
import { Form } from "../FormControl";
import { MdMyLocation } from "react-icons/md";
import { FavouritesMenu } from "../Favourites";
import { HamBurger } from "../Burger";

export const SearchHeader = () => {
  const { fetchLocation } = useLocation();
  const [open, setOpen] = useState(false);
  return (
    <Wrapper>
      <HamBurger open={open} setOpen={setOpen} />
      <FavouritesMenu open={open} setOpen={setOpen} />
      <Form />
      <LocationBtn onClick={fetchLocation}>
        <MdMyLocation size="30px" />
      </LocationBtn>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;
  margin: 20px 30px 0 30px;
`;

const LocationBtn = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: ${(p) => p.theme.colors.textColor};
`;
