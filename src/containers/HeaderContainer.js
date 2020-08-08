import React from "react";
import styled from "styled-components";
import { SearchHeader } from "../components/Header/SearchHeader";
import { ToggleHeader } from "../components/Header/ToggleHeader";

export const HeaderContainer = () => {
  return (
    <Wrapper>
      <SearchHeader />
      <ToggleHeader />
    </Wrapper>
  );
};

const Wrapper = styled.div`
display: flex;
justify-content: space-between;
padding: 10px;
background: ${(props) => props.theme.colors.background};
box-shadow: 0 0 5px rgba(0,0,0,0.3);

@media (max-width:700px) {
  flex-direction: column;
  margin-top:40px;
}

@media (max-width:400px) {
  padding: 20px;
  font-size: 14px;
  
}


}
`;
