import React from "react";
import styled from "styled-components";
import { BsArrowRight } from "react-icons/bs";

export const FavouriteCard = ({ location }) => {
  return (
    <Wrapper>
      {location}
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
  padding: 20px 10px;
  margin-bottom: 30px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background: none;
  color: ${(p) => p.theme.colors.textColor};
  font-size: 1.2rem;

  :hover {
    border: 1px solid ${(p) => p.theme.colors.textColor};
  }
`;

const Text = styled.span`
  marginLeft: "20px",
  fontSize: "1.2rem",
  color: ${(p) => p.theme.colors.textColor} 
  `;
