import React from "react";
import styled from "styled-components";
import { BsArrowRight } from "react-icons/bs";

export const FavouriteCard = ({ location }) => {
  return (
    <Wrapper>
      <span style={{ marginLeft: "20px", fontSize: "1.2rem" }}>{location}</span>
      <BsArrowRight style={{ marginRight: "20px" }} />
    </Wrapper>
  );
};

const Wrapper = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: auto;
  padding: 20px 0;
  margin-bottom: 30px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  ${({ theme }) => `
        background: ${theme.colors.background};
        color: ${theme.colors.textColor}
    `}
`;
