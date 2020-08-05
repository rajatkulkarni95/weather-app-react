import React from "react";
import styled from "styled-components";

export const Loader = () => (
  <Wrapper>
    <LoaderStyle></LoaderStyle>
  </Wrapper>
);

const Wrapper = styled.div`
  justify-content: center;
  align-items: center;
  overflow: hidden;
  width: 100px;
  height: 4px;
  background-color: #e3829d;
  margin: 20px auto;
`;

const LoaderStyle = styled.div`
  position: relative;
  width: 100px;
  height: 100%;

  :before {
    content: "";
    position: absolute;
    height: 100%;
    background-color: #d4496f;
    animation: first 1.5s infinite ease-out;
  }

  :after {
    content: "";
    position: absolute;
    height: 100%;
    background-color: #e90c48;
    animation: second 1.5s infinite ease-in;
  }

  @keyframes first {
    0% {
      left: -100%;
      width: 100%;
    }
    100% {
      left: 100%;
      width: 10%;
    }
  }

  @keyframes second {
    0% {
      left: -150%;
      width: 100%;
    }
    100% {
      left: 100%;
      width: 10%;
    }
  }
`;
