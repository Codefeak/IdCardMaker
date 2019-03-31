import styled from "styled-components";

export const Button = styled.button`
  margin: 20px 0;
  max-width: 200px;
  padding: 15px 20px;
  border-radius: 15px;
  color: black;
  background-color: transparent;
  box-sizing: none;
  border: 2px solid black;
  box-shadow: none;
  cursor: pointer;
  font-size: 1.2em;
  display: inline-block;
  &:hover {
    background-color: black;
    color: white;
  }
`;
