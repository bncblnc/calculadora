import { styled } from "styled-components";

export const ButtonContainer = styled.button`
  padding: 20px;
  margin: 1px;
  border: none;
  border-radius: 5px;
  background-color: #444;
  color: #fff;
  font-size: 24px;
  font-weight: 700;
  flex: 1;
  transition: all 0.2s;

  &:hover {
    opacity: 0.8;
  }
`;
