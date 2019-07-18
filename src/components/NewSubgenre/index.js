// @flow
import React from "react";
import { reduxForm, Field, Form } from "redux-form";
import { compose } from "recompose";
import { connect } from "react-redux";
import type { FormProps } from "redux-form";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import TextField from "../TextField";
import { createSubgenre } from "../../store/actions/subgenre";
import validate from "./validate";

type PropsT = {
  createSubgenre: Function
} & FormProps;

const classes = { formWrapper: { flex: 1 } };

const renderCheckbox = ({ input }) => (
  <div>
    <FormControlLabel
      label="Description is required for this subgenre"
      margin="normal"
      control={
        <Checkbox
          {...input}
          component={Checkbox}
          margin="normal"
          color="primary"
        />
      }
    />
  </div>
);

function NewSubgenre(props: PropsT) {
  const { handleSubmit, createSubgenre } = props;
  return (
    <Form style={classes.formWrapper} onSubmit={handleSubmit(createSubgenre)}>
      <Field
        name="name"
        label="Subgenre name"
        placeholder="Subgenre name"
        type="text"
        component={TextField}
        fullWidth
        margin="normal"
        variant="outlined"
        required
      />
      <Field
        name="description"
        label="Description"
        placeholder="Type the description..."
        type="text"
        component={TextField}
        fullWidth
        variant="outlined"
        multiline
        margin="normal"
        rows={4}
      />
      <Field name="isDescriptionRequired" component={renderCheckbox} />
    </Form>
  );
}

const mapStateToProps = () => ({
  initialValues: {
    isDescriptionRequired: false
  }
});

const mapDispatchToProps = { createSubgenre };

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  reduxForm({
    form: "newSubgenre",
    validate
  })
)(NewSubgenre);
