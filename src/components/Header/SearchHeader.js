import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "../Button";
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
      <Button background="#6E707A" color="#ffffff" onClick={fetchLocation}>
        <MdMyLocation />
      </Button>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;
  margin: 20px 30px 0 30px;
`;

const HamWrapper = styled.span`
  margin-top: 10px;
`;
