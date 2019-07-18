// @flow
import React from "react";
import { Field } from "redux-form";
import { withStyles, MenuItem } from "@material-ui/core";
import TextField from "../TextField";
import {
  authors,
  publishers,
  formats,
  edition_languages,
  SelectT
} from "./data";

const styles = theme => ({
  root: {
    marginBottom: theme.spacing(2),
    width: "100%"
  },
  textField: {
    marginRight: theme.spacing(1),
    minWidth: "300px"
  }
});

type PropsT = {
  classes: Object
};

class InformationPage extends React.Component<PropsT> {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Field
          name="book_title"
          component={TextField}
          placeholder="Book title"
          label="Book title"
          margin="normal"
          variant="outlined"
          fullWidth
          required
        />

        <Field
          name="author"
          component={TextField}
          label="Author"
          placeholder="Author"
          margin="normal"
          variant="outlined"
          fullWidth
          select
        >
          {authors.map((option: SelectT) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Field>

        <Field
          name="isbn"
          component={TextField}
          label="ISBN"
          placeholder="ISBN"
          margin="normal"
          variant="outlined"
          fullWidth
          required
        />

        <Field
          name="publisher"
          component={TextField}
          label="Publisher"
          margin="normal"
          variant="outlined"
          fullWidth
          required
          select
        >
          {publishers.map((option: SelectT) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Field>

        <Field
          name="date"
          component={TextField}
          type="date"
          label="Date Publisher"
          margin="normal"
          variant="outlined"
          InputLabelProps={{
            shrink: true
          }}
          className={classes.textField}
        />

        <div>
          <Field
            name="pages"
            component={TextField}
            type="number"
            label="Number of Pages"
            placeholder="Number of Pages"
            margin="normal"
            variant="outlined"
            className={classes.textField}
          />
        </div>

        <div>
          <Field
            name="format"
            component={TextField}
            label="Format"
            placeholder="Format"
            margin="normal"
            variant="outlined"
            className={classes.textField}
            select
          >
            {formats.map((option: SelectT) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </Field>
        </div>

        <Field
          name="edition"
          component={TextField}
          type="text"
          label="Edition"
          margin="normal"
          variant="outlined"
          className={classes.textField}
        />

        <Field
          name="edition_language"
          component={TextField}
          label="Edition Language"
          margin="normal"
          variant="outlined"
          className={classes.textField}
          required
          select
        >
          {edition_languages.map((option: SelectT) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Field>

        <Field
          name="description"
          component={TextField}
          type="text"
          label="Description"
          placeholder="Type the description..."
          margin="normal"
          variant="outlined"
          rows={4}
          multiline
          fullWidth
        />
      </div>
    );
  }
}

export default withStyles(styles)(InformationPage);
