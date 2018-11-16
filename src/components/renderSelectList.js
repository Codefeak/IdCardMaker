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
  gender, label, type, key,
}:Props) => (
  <div className="margin" key={key}>
    <p className="light-text">{label}</p>
    {gender !== undefined
      && gender.map(item => (
        <React.Fragment key={item}>
          <label htmlFor={item}>
            <Field id={item} name="gender" component="input" type={type} value={item} />
            {item}
          </label>

        </React.Fragment>
      ))}
  </div>
);

export default renderSelectList;
