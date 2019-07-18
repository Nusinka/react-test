// @flow
import { BookT } from "../../models";

const validate = (values: BookT) => {
  const errors = {};
  if (!values.book_title) {
    errors.book_title = "Required";
  }
  if (!values.author) {
    errors.author = "Required";
  }
  if (!values.isbn) {
    errors.isbn = "Required";
  }
  if (!values.publisher) {
    errors.publisher = "Required";
  }
  if (!values.date) {
    errors.date = "Required";
  }
  if (!values.pages) {
    errors.pages = "Required";
  }
  if (!values.format) {
    errors.format = "Required";
  }
  if (!values.edition) {
    errors.edition = "Required";
  }
  if (!values.edition_language) {
    errors.edition_language = "Required";
  }
  if (!values.description) {
    errors.description = "Required";
  }
  return errors;
};

export default validate;
