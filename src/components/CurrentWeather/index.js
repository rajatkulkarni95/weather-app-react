import React, { useContext } from "react";
import { GoLocation } from "react-icons/go";
import { WeatherContext } from "../../App";
import moment from "moment";
import Loader from "react-loader";
import styled from "styled-components";

export const CurrentWeather = () => {
  const [state] = React.useContext(WeatherContext);

  const { weather, name, main } = state.weather;
  /* Image, Temp, Description, [Today, Date], [Icon, Place] */
  return (
    <>
      {weather ? (
        <Wrapper>
          <Image
            src={`http://openweathermap.org/img/wn/${weather[0].icon}@4x.png`}
          />
          <p>
            <TempValue>
              {state.tempScale === "C"
                ? Math.floor(main.temp - 273.15)
                : Math.floor((main.temp - 273.15) * 1.8 + 32)}
            </TempValue>
            <TempDegree>{`°${state.tempScale}`}</TempDegree>
          </p>
          <Description>{weather[0].description}</Description>
          <DateDiv>
            Today {" | "}
            {moment().format("ddd, Do MMM")}
          </DateDiv>
          <Location>
            <GoLocation /> {name}
          </Location>
        </Wrapper>
      ) : (
        <Loader />
      )}
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 85%;
`;

const Image = styled.img`
  size: 60px;
`;

const LoadingText = styled.div`
  justify-content: center;
  align-items: center;
`;

const TempValue = styled.span`
  font-size: 7rem;
  font-weight: 800;
`;

const TempDegree = styled.span`
  font-size: 3rem;
  font-weight: 600;
`;

const Description = styled.div`
  font-size: 2.5rem;
  font-weight: 600;
  text-align: center;
`;

const DateDiv = styled.div`
  margin-top: auto;
  margin-bottom: 20px;
`;

const Location = styled.div`
  margin-bottom: 20px;
`;