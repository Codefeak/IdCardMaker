// @flow
import React from 'react';
import { reduxForm, Field } from 'redux-form';
import type { FormProps } from 'redux-form/lib/types';

import renderSelectList from './renderSelectList';
import formField from './renderField';

type Props = FormProps;

const RenderMainform = (props:Props) => {
  const { handleSubmit } = props;
  const FieldArray = [
    {
      name: 'firstName',
      label: 'First Name',
      type: 'text',
    },
    {
      name: 'lastName',
      label: 'Last Name',
      type: 'text',
    },
    {
      name: 'dob',
      label: 'Date of Birth',
      type: 'date',
    },
    {
      name: 'sSN',
      label: 'Social Security Number',
      type: 'text',
    },
    {
      name: 'doi',
      label: 'Date of Issue',
      type: 'date',
    },
    {
      name: 'doe',
      label: 'Date of Expiry',
      type: 'date',
    },
    {
      name: 'gender',
      label: 'Gender',
      type: 'radio',
      gender: ['male', 'female'],
    },
  ];

  return (
    <form onSubmit={handleSubmit}>
      {FieldArray.map(
        (field) => {
          switch (field.name) {
            case 'gender':
              return <Field
                name={field.name}
                label={field.label}
                component={renderSelectList}
                gender={field.gender}
                type={field.type}
                key={field.name}/>;
            default:
              return <Field
                key={field.name}
                name={field.name}
                label={field.label}
                component={formField}
                type={field.type}
                {...props}/>;
          }
        },
        // field.name === 'gender'
        //   ? (<Field
        //   name={field.name}
        //   label={field.label}
        //   component={renderSelectList}
        //   gender={field.gender}
        //   type={field.type}
        //   key = {field.name}/>)
        //   : (<Field
        //   key = {field.name}
        //   name={field.name}
        //   label={field.label}
        //   component={formField}
        //   type={field.type}
        //   {...props}/>)
      )}
      <button type="button">
        Submit
      </button>
    </form>
  );
};

export default reduxForm({
  form: 'mainform',
})(RenderMainform);
