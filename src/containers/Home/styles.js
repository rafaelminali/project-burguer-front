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
  height: 100vh;
`;

export const InputLabel = styled.p`
  font-size: 18px;
  font-weight: 700;
  line-height: 22px;
  color: rgba(238, 238, 238, 1);
  margin-left: 15px;
`;

export const Input = styled.input`
  width: 342px;
  height: 58px;
  padding: 19px 0 19px 15px;
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.25);
  border: none;
  outline: none;
  font-size: 18px;
  font-weight: 300;
  line-height: 21.09px;
  color: rgba(255, 255, 255, 1);

  &::placeholder {
    font-size: 18px;
    font-weight: 300;
    line-height: 21.09px;
    color: rgba(255, 255, 255, 1);
  }
`;

export const ContainerInput = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  gap: 5px;
`;
