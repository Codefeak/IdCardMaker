import styled from "styled-components";
import bgImg from "../../img/ID_back_chip.jpg";
import {Card} from '../DisplayGrid';

export const CardFrontWrapper = styled(Card)`
  background-image: ${props => props.img || `url(${bgImg})`};
  background-repeat: no-repeat;
  background-size: 100%;
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: 70% 30%;

  text-align: left;
  flex-direction: column;
`;

export const CardTitle = styled.p`
  text-align: center;
  justify-items: center;
  font-size: 1.5em;
  font-weight: 600;
  margin: 5px 0 0 0;
  grid-column: ${props => props.col};
  grid-row: ${props => props.row};
`;
export const Normal = styled.p`
  display: flex;
  margin: 10px;
  grid-column: ${props => props.col};
  grid-row: ${props => props.row};
`;
export const MiddleDiv = styled.div`
grid-row = ${props => props.row};
display: grid;
grid-template-columns: 1fr 1fr 1fr;
`;

export const FieldName = styled.span`
  font-weight: 600;
`;
export const FieldValue = styled.span`
  flex-grow: 1;
  text-align: right;
  background-color: white;
  justify-items: right;
`;
export const Img = styled.img`
  width: 115px;
  height: 140px;
  margin: 10px 20px;
  border: 1px solid grey;
  right: 0;
  grid-column: ${props => props.col};
  grid-row: ${props => props.row};
`;
