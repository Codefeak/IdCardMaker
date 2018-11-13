// @flow
import React from 'react';

type Props = {
  input: { value: {}, name: string },
  type: string,
  label: string,
  style: {},
  key: string,
  file:{},
};
const renderAvatar = ({
  file,
  input: { value: originalVal, ...input } = { value: file },
  type,
  label,
  style,
  key,
}: Props) => {
  const { name } = input;
  return (
    <div className="margin bold600" style={style} key={key}>
      <label className="light-text" htmlFor={name}>
        {label}
        <p className="flex">
          <input {...input} value={file} type={type} name={name} id={name} />
        </p>
      </label>
    </div>
  );
};

export default renderAvatar;
