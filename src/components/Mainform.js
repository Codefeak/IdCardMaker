// @flow
import React from 'react';
import { reduxForm, Field } from 'redux-form';
import type { FormProps } from 'redux-form/lib/types';

import renderSelectList from './renderSelectList';
import formField from './renderField';
import renderAvatar from './renderAvatar';
import { default as data } from '../data';
// import { validate } from '../utl/validation';

type Props = FormProps;

const RenderMainform = (props: Props) => {
  const { handleSubmit, reset } = props;
  return (
    <form onSubmit={handleSubmit}>
      <h1 className="center-align light-text"> ID Card Maker</h1>
      {data.map((field) => {
        switch (field.name) {
          case 'gender':
            return (
              <Field
                name={field.name}
                label={field.label}
                component={renderSelectList}
                gender={field.gender}
                type={field.type}
                key={field.name} />
            );
          case 'avatar':
            return (
              <Field
                name={field.name}
                label={field.label}
                component={renderAvatar}
                type={field.type}
                key={field.name}
                {...props} />
            );

          default:
            return (
              <Field
                key={field.name}
                name={field.name}
                label={field.label}
                component={formField}
                type={field.type}
                {...props} />
            );
        }
      })}
      <button className="button" onClick={reset}>
        Clear Form
      </button>
    </form>
  );
};

export default reduxForm({
  form: 'mainform',
})(RenderMainform);
