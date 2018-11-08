// @flow
import React from 'react';
import { Field } from 'redux-form';
import type { FieldProps } from 'redux-form';

type Props = FieldProps & {
  gender:string[],
  style:{},
  label:string,
  type:string,
  key:string,
}
const renderSelectList = ({
  gender, style, label, type, key,
}:Props) => (
  <div className="" key={key}>
    <span>{label}</span>
    {gender !== undefined
      && gender.map(item => (
        <label htmlFor= {item} key={item}>
        <Field id ={item} name ="gender" component = "input" type={type} value={item}/>
        {item}
        </label>
      ))}
  </div>
);

export default renderSelectList;
