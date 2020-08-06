import React, { useContext } from "react";
import styled from "styled-components";
import { WiHumidity, WiBarometer } from "react-icons/wi";
import { FiWind } from "react-icons/fi";
import { MdVisibility } from "react-icons/md";
import { WeatherContext } from "../../App";

export const StatusCard = ({ weather }) => {
  const [state] = useContext(WeatherContext);
  const {
    wind: { speed },
    visibility,
    main: { pressure, humidity },
  } = weather;

  return (
    <Wrapper>
      <Card>
        <FiWind size="40px" />
        <span>Wind</span>
        <p>
          {speed}
          <span>km/h</span>
        </p>
      </Card>
      <Card>
        <MdVisibility size="40px" />
        <span>Visibility</span>
        <p>
          {visibility}
          <span></span>
        </p>
      </Card>
      <Card>
        <WiHumidity size="40px" />
        <span>Humidity </span>
        <p>
          {humidity}
          <span>%</span>
        </p>
      </Card>
      <Card>
        <WiBarometer size="40px" />
        <span>Air Pressure </span>
        <p>
          {pressure}
          <span>atm</span>
        </p>
      </Card>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 50px;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 150px;
  width: 200px;
  padding: 20px;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.2);
  background: ${(p) => p.theme.colors.elements};
  border-radius: 5px;
  color: ${(p) => p.theme.colors.textColor};

  p {
    font-size: 1.5rem;
    font-weight: 600;
  }
`;
