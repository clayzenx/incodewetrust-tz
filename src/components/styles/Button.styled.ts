import styled from "styled-components";

export const Button = styled.button`
  border: 1px solid #ddd;
  background-color: rgba(0, 0, 0, 0);
  padding: 10px 15px;
  text-transform: uppercase;
  cursor: pointer;

  & > * {
    margin: 5px;
  }

  &:hover,
  &.active {
    background-color: rgba(0, 0, 0, 0.05);
  }
  &.active {
    color: green;
  }
`;
