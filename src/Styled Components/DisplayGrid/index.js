import styled from "styled-components";

export const H1 = styled.h1`
  text-align: center;
  justify-items: center;
  font-family: Concert One;
  font-size: 3em;
`;

export const Section = styled.section`
  display: grid;
  grid-template: "form preview";
`;

export const PreviewWrapper = styled.div``;

export const Normal = styled.p`
  display: flex;
  margin: 10px;
`;

export const Card = styled.div`
  position: relative;
  width: 500px;
  height: 300px;
  margin: 10px;
  border: 1px solid grey;
  border-radius: 5px;
`;
