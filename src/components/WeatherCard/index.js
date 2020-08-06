import React, { useContext } from "react";
import styled from "styled-components";
import moment from "moment";
import { WeatherContext } from "../../App";

export const WeatherCard = ({ value }) => {
  const [state] = useContext(WeatherContext);

  return (
    <Wrapper>
      <Date>{moment.unix(value.dt).utc().format("ddd, D MMM")}</Date>
      <img
        src={`http://openweathermap.org/img/wn/${value.weather[0].icon}@2x.png`}
      />
      <MinMax>
        <span>
          {state.tempScale === "C"
            ? Math.floor(value.main.temp_max - 273.15)
            : Math.floor((value.main.temp_max - 273.15) * 1.8 + 32)}{" "}
          {`°${state.tempScale}`}
        </span>
        <span>
          {state.tempScale === "C"
            ? Math.floor(value.main.temp_min - 273.15)
            : Math.floor((value.main.temp_min - 273.15) * 1.8 + 32)}{" "}
          {`°${state.tempScale}`}
        </span>
      </MinMax>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 200px;
  width: 120px;
  padding: 10px;
  margin-right: 50px;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.2);
  justify-content: center;
  background: ${(p) => p.theme.colors.elements};
  border-radius: 5px;
  color: ${(p) => p.theme.colors.textColor};
`;

const Date = styled.p`
  text-align: center;
  font-size: 1rem;
  font-weight: 600;
`;

const MinMax = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: 600;
`;