import styled from "styled-components";
import { Link } from "react-router-dom";

export const Image = styled.img`
  margin-top: 11px;
`;

export const Container = styled.div`
  background: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  min-height: 100vh;
`;
export const User = styled.li`
  width: 342px;
  display: flex;
  justify-content: space-between;
  padding: 18px;
  align-items: center;
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  min-height: 60px;
  border-radius: 14px;
  border: none;
  outline: none;
  margin-top: 20px;

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 8px;
  }

  .order {
    font-size: 18px;
    font-weight: 300;
    line-height: 21.09px;
    color: rgba(255, 255, 255, 1);
  }

  .name {
    font-size: 18px;
    font-weight: 700;
    line-height: 21.09px;
    color: rgba(255, 255, 255, 1);
  }

  button {
    background: none;
    border: none;
    cursor: pointer;
  }
`;
