// @flow
import { SubgenreT } from "../../models";

const validate = (values: SubgenreT) => {
  const errors = {};
  if (!values.name) {
    errors.name = "Required";
  }
  return errors;
};

export default validate;
