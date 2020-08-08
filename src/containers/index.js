import React, { useEffect } from "react";
import styled from "styled-components";
import { useLocation } from "../hooks/location";
import { useFavourites } from "../hooks/favourite";
import { CurrentCard } from "./CurrentCard";
import { ForecastCard } from "./ForecastCard";
import { HeaderContainer } from "./HeaderContainer";

export const Container = () => {
  const { fetchLocation } = useLocation();
  const { getFavourites } = useFavourites();

  useEffect(() => {
    fetchLocation();
    getFavourites();

    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Wrapper>
      <HeaderContainer />
      <ContainerWrapper>
        <CurrentCard />
        <ForecastCard />
      </ContainerWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  background: ${(p) => p.theme.colors.background};

  @media (max-width: 1000px) {
    flex-direction: column;
    justify-content: space-between;
  }
`;

const ContainerWrapper = styled.div`
  height: 90vh;
  width: 100vw;
  display: flex;

  background: ${(p) => p.theme.colors.background};

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;
