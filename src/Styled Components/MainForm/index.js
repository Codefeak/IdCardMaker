import styled from "styled-components";
import { H1 } from "../DisplayGrid";

export const Form = styled.form`
  background: #ffffffa1;
  background-repeat: no-repeat;
  background-position-y: 79%;
  background-size: 100%;
  width: 90%;
  text-align: left;
  margin: 12px auto;
  padding: 20px;
  box-shadow: 1px 1px 4px 0px #c5bdbd;
  `;
export const H1light = styled(H1)`
  color: #84837c;
  font-size: 2em;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
`;
export const RenderWrapper = styled.div`
  margin: 10px;
  font-weight: 600;
`;
export const Label = styled.label`
  color: #84837c;
`;
export const P = styled.p`
  display: flex;
`;
