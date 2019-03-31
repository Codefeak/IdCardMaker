// @flow
import React from "react";
import { RenderWrapper, Label, P, Input } from "../Styled Components/MainForm";

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
      <P>
        <Label htmlFor={name}>{label}:</Label>
      <Input {...input} type={type} name={name} id={name} />
      </P>
      {/* <span>{error && console.log(error)}</span> */}
    </RenderWrapper>
  );
};

export default FormField;
