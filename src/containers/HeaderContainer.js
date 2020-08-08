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
  align-items: space-between;
  background: ${(p) => p.theme.colors.elements};
  height: 100%;
  width: 100%;
  border-radius: 10px;
`;
