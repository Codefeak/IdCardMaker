// @flow
import React from 'react';

type Props ={
  input:{value:{}, name:string},
  type: string,
  label: string,
  style: {},
  key: string,
}
const FormField = ({
  input: { value: originalVal, ...input } = { value: '' },
  type,
  label,
  style,
  key,
}:Props) => {
  const { value, name } = input;
  return (
    <div className="margin bold600" style={style} key={key}>
      <label className="light-text" htmlFor={name}>
        {label}
        </label>
        <p className ="flex">
        <input
        {...input}
        value={value}
        type={type}
        name={name}
        id={name}/>
        </p>
    </div>
  );
};

export default FormField;
