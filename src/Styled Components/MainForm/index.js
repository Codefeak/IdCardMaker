import styled from "styled-components";
import { H1 } from "../DisplayGrid";

export const Form = styled.form`
  display: grid;
  background: #ffffffce;
  background-repeat: no-repeat;
  background-position-y: 79%;
  background-size: 100%;
  width: 90%;
  height: 760px;
  overflow-y: auto;
  text-align: left;
  margin: 12px auto;
  padding: 20px;
  box-shadow: 1px 1px 4px 0px #c5bdbd;
`;
export const H1light = styled(H1)`
  grid-column: 2 span;
  color: #84837c;
  font-size: 2em;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
`;
export const RenderWrapper = styled.div`
  grid-column: 2 span;
  margin: 10px;
  display: flex;
  flex-direction: column;
  font-weight: 600;
`;
export const Label = styled.label`
  color: #84837c;
`;
export const P = styled.p`
  display: flex;
`;

export const Input = styled.input`
  background: transparent;
  border: none;
  border-bottom: 1px solid darkkhaki;
  flex-grow: 1;
  font-size: 1.3em;
  color: #611103;
  text-align: right;
  margin-left: 15px;
`;
