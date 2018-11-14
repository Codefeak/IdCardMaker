// @flow
import React from 'react';

type Props = {
  input: { value: {}, name: string },
  type: string,
  label: string,
  style: {},
  key: string,
};
const FormField = ({
  input: { value: originalVal, ...input } = { value: '' },
  type,
  label,
  style,
  key,
  meta: { error },
}: Props) => {
  const { name } = input;
  return (
    <div className="margin bold600" style={style} key={key}>
      <label className="light-text" htmlFor={name}>
        {label}
        <p className="flex">
          <input {...input} type={type} name={name} id={name}/>
        </p>
      </label>
      {/* <span>{error && console.log(error)}</span> */}
    </div>
  );
};

export default FormField;
