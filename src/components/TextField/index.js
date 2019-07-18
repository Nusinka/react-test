// @flow
import React from "react";
import TextField from "@material-ui/core/TextField";
import type { FormProps } from "redux-form";

type PropsT = {
  label?: string,
  placeholder?: string,
  type?: string,
  fullWidth?: boolean,
  margin?: boolean,
  variant?: boolean,
  required?: boolean,
  multiline?: boolean,
  rows?: number,
  select?: boolean
} & FormProps;

export default function TransformedTextField({
  input,
  meta,
  ...props
}: PropsT) {
  return <TextField {...input} {...props} error={meta.error && meta.touched} />;
}
