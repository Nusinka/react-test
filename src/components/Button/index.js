// @flow
import React from "react";
import type { FormProps } from "redux-form";
import Button from "@material-ui/core/Button";

type PropsT = {
  variant?: boolean,
  size?: string,
  label?: string
} & FormProps;

const classes = {
  button: {
    width: "100%"
  }
};

export default function TransformedButton({ input, meta, ...props }: PropsT) {
  const isSelected = input.value === props.label;
  return (
    <Button
      {...input}
      {...props}
      onFocus={input.onChange}
      value={props.label}
      style={classes.button}
      {...(isSelected && { variant: "contained", color: "primary" })}
    >
      {props.label}
    </Button>
  );
}
