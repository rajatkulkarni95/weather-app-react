import React, { useContext, useRef } from "react";
import styled from "styled-components";
import { Button } from "../Button";
import { WeatherContext } from "../../App";
import { handleLocation } from "../../helpers";

export const Form = () => {
  const [, dispatch] = useContext(WeatherContext);
  const inputRef = useRef();

  const handleInput = (event) => {
    event.preventDefault();
    handleLocation(inputRef.current.value, dispatch);

    inputRef.current.value = "";
  };

  return (
    <form onSubmit={handleInput}>
      <SearchInput type="text" placeholder="Search..." ref={inputRef} />
      <Button background="#3C47E9" color="white" type="submit">
        Search
      </Button>
    </form>
  );
};

const SearchInput = styled.input`
  background: ${(p) => p.theme.colors.elements};
  color: ${(p) => p.theme.colors.textColor};
  border: none;
  font-family: sans-serif;
  width: auto;
  height: auto;
  padding: 10px;
  margin: 0 20px;

  :focus {
    border-bottom: 2px solid ${(p) => p.theme.colors.textColor};
  }

  }
`;
