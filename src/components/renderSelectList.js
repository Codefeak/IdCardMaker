// @flow
import React from "react";
import { Field } from "redux-form";
import type { FieldProps } from "redux-form";

import {
  Div,
  LabelP,
  LabelSelect
} from "../Styled Components/MainForm/RenderSelectList";

type Props = FieldProps & {
  gender: string[],
  style: {},
  label: string,
  type: string,
  key: string
};
const renderSelectList = ({ gender, label, type, key }: Props) => (
  <Div key={key}>
    <LabelP>{label}:</LabelP>
    {gender !== undefined &&
      gender.map(item => (
        <React.Fragment key={item}>
          <LabelSelect htmlFor={item}>
            <Field
              id={item}
              name="gender"
              component="input"
              type={type}
              value={item}
            />
            {item}
          </LabelSelect>
        </React.Fragment>
      ))}
  </Div>
);

export default renderSelectList;
