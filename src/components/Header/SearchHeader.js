import React from "react";
import styled from "styled-components";
import { Button } from "../Button";
import { useLocation } from "../../hooks";
import { Form } from "../FormControl";
import { MdMyLocation } from "react-icons/md";

export const SearchHeader = () => {
  const { fetchLocation } = useLocation();
  return (
    <Wrapper>
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
