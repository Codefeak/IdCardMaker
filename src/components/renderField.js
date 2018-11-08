import React from 'react';

const FormField = ({
  input: { value: originalVal, ...input } = { value: '' },
  type,
  label,
  style,
  key,
}) => {
  const { value } = input;
  return (
    <div className="" style={style} key={key}>
      <label htmlFor={input.name}>
        {label}
      <input
        {...input}
        value={value}
        type={type}
        name={input.name}
        id={input.name}/>
      </label>
    </div>
  );
};

export default FormField;
