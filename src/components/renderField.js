// @flow
import React from "react";
import { RenderWrapper, Label, P } from "../Styled Components/MainForm";

type Props = {
  input: { value: {}, name: string },
  type: string,
  label: string,
  style: {},
  key: string
};
const FormField = ({
  input: { value: originalVal, ...input } = { value: "" },
  type,
  label,
  style,
  key,
  meta: { error }
}: Props) => {
  const { name } = input;
  return (
    <RenderWrapper style={style} key={key}>
      <Label htmlFor={name}>
        {label}
        <P>
          <input {...input} type={type} name={name} id={name} />
        </P>
      </Label>
      {/* <span>{error && console.log(error)}</span> */}
    </RenderWrapper>
  );
};

export default FormField;
