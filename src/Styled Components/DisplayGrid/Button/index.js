import styled from "styled-components";

export const Button = styled.button`
  margin: 20px 0;
  padding: 15px 20px;
  border-radius: 15px;
  color: lightseagreen;
  background-color: transparent;
  box-sizing: none;
  border: 1px solid lightseagreen;
  box-shadow: none;
  cursor: pointer;
  font-size: 1.2em;
  display: inline-block;
  &:hover {
    background-color: lightseagreen;
    color: white;
  }
`;
