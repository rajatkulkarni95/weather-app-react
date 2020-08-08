import styled from "styled-components";

export const Button = styled.button`
  ${(props) => ` 
    background: ${props.background};
    color: ${props.color};`}
  width: auto;
  padding: 10px;
  font-weight: 400;
  border: none;
  font-family: ${(p) => p.theme.font};
  cursor: pointer;
  border-radius: 3px;

  @media (max-width: 390px) {
    display:none;
  }

  @
`;
