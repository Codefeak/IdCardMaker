// @flow
import React, { Component } from "react";
import { RenderWrapper, Label, P } from "../Styled Components/MainForm";

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
      handleFile
    } = this.props;
    return (
      <RenderWrapper key={name}>
        <Label htmlFor={name}>
          {label}
          <P>
            <input type={type} name={name} id={name} onChange={handleFile} />
          </P>
        </Label>
      </RenderWrapper>
    );
  }
}

export default renderAvatar;
