// @flow
import React, { Component } from 'react';

type Props = {
  input: { value: {}, name: string },
  type: string,
  label: string,
  handleFile: ()=>mixed,
};
type State = {
  file: string,
};
class renderAvatar extends Component<Props, State> {
  render() {
    const {
      input: { name },
      label,
      type,
      handleFile,
    } = this.props;
    return (
      <div className="margin bold600" key={name}>
        <label className="light-text" htmlFor={name}>
          {label}
          <p className="flex">
            <input type={type} name={name} id={name} onChange={handleFile} />
          </p>
        </label>
      </div>
    );
  }
}

export default renderAvatar;
