import styled from "styled-components";
import { Card } from "../DisplayGrid";
import bgImg from "../../img/ID_bg_chip.jpg";

export const CardBackWrapper = styled(Card)`
  display: grid;
  text-align: center;
  grid-template-rows: 1fr 1fr 5fr;
  justify-items: center;
  background-image: ${props => props.img || `url(${bgImg})`};
  background-repeat: no-repeat;
  background-size: 100%;
  background-position-y: 12em;
  background-color: #dae3fa96;
  background-blend-mode: luminosity;
`;

export const UL = styled.ul`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
`;

export const Li = styled.li`
  font-size: 0.75em;
  margin-right: 15px;
  list-style-type: decimal;
`;
