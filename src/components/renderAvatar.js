// @flow
import React, { Component } from "react";
import styled from "styled-components";

import { RenderWrapper, Label, P } from "../Styled Components/MainForm";

const AvatarWrapper = styled(RenderWrapper)`
  display: grid;
  grid-column: ${props => props.col};
`;

type Props = {
  input: { value: {}, name: string },
  type: string,
  label: string,
  handleFile: () => mixed
};
type State = {
  file: string
};
class renderAvatar extends Component<Props, State> {
  render() {
    const {
      input: { name },
      label,
      type,
      col,
      handleFile
    } = this.props;
    return name === "avatar" ? (
      <AvatarWrapper key={name} col="2">
        <Label htmlFor={name}>
          {label}:
          <P>
            <input type={type} name={name} id={name} onChange={handleFile} />
          </P>
        </Label>
      </AvatarWrapper>
    ) : (
      <AvatarWrapper key={name} col={col}>
        <Label htmlFor={name}>
          {label}:
          <P>
            <input type={type} name={name} id={name} onChange={handleFile} />
          </P>
        </Label>
      </AvatarWrapper>
    );
  }
}

export default renderAvatar;
