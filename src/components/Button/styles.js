import styled from "styled-components";

export const Button = styled.button`
  width: 342px;
  height: 68px;
  background: ${(rest) =>
    rest.isBack ? `rgba(255, 255, 255, 0.14)` : `rgba(217, 56, 86, 1)`};
  font-size: 17px;
  font-weight: 900;
  line-height: 2.5px;
  border: none;
  border-radius: 5px;
  color: rgba(255, 255, 255, 1);
  margin-top: 76px;
  margin-bottom: 40px;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
  &:active {
    opacity: 0.5;
  }
`;
