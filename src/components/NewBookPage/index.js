// @flow
import React from "react";
import { connect } from "react-redux";
import { compose } from "recompose";
import { Form, reduxForm, Field, formValueSelector, untouch } from "redux-form";
import type { FormProps } from "redux-form";
import { withStyles } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import InformationPage from "../InformationPage";
import NewSubgenre from "../NewSubgenre";
import Button from "../Button";
import Stepper from "../Stepper";
import { receiveGenres, createBook } from "../../store/actions/book";
import { changeStep } from "../../store/actions/step";
import { createNewSubgenre } from "../../store/actions/subgenre";
import { GenreT, SubgenreT } from "../../models";
import validate from "./validate";

type PropT = {
  genres: GenreT[],
  genre: string,
  subgenre: string,
  activeStep: number,
  subgenres: SubgenreT[],
  newSubgenre: boolean,
  receiveGenres: Function,
  changeStep: Function,
  createNewSubgenre: Function,
  createBook: Function
} & FormProps;

const styles = () => ({
  wrapper: {
    flex: 1,
    display: "flex",
    flexDirection: "column"
  },
  contentWrapper: {
    flex: 1
  },
  contentBlock: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap"
  },
  button: {
    width: "100%"
  }
});

class NewBookPage extends React.Component<PropT> {
  componentDidMount() {
    this.props.receiveGenres();
  }

  renderContent() {
    const { genres, subgenres, activeStep, newSubgenre } = this.props;
    switch (activeStep) {
      case 0:
        return (
          genres.length &&
          genres.map((genre: GenreT[]) => (
            <Grid item xs={3} key={genre.name}>
              <Field
                name="genre"
                component={Button}
                label={genre.name}
                variant="outlined"
                size="large"
              />
            </Grid>
          ))
        );
      case 1:
        return (
          <>
            {subgenres.map((subgenre: SubgenreT) => {
              return (
                <Grid item xs={3} key={subgenre.id}>
                  <Field
                    name="subgenre"
                    component={Button}
                    label={subgenre.name}
                    variant="outlined"
                    size="large"
                  />
                </Grid>
              );
            })}
            <Grid item xs={3} key="add_new">
              <Field
                name="subgenre"
                component={Button}
                label="Add new"
                variant="outlined"
                size="large"
              />
            </Grid>
          </>
        );
      case 2:
        return newSubgenre ? <NewSubgenre /> : <InformationPage />;
      case 3:
        return <InformationPage />;
      default:
        return null;
    }
  }

  componentWillUnmount(): void {
    this.props.untouch("newBook");
  }

  render() {
    const {
      activeStep,
      changeStep,
      classes,
      handleSubmit,
      createBook,
      subgenres,
      newSubgenre,
      genre,
      subgenre
    } = this.props;
    return (
      <div className={classes.wrapper}>
        <Typography variant="h4">Add book - New book</Typography>
        <Stepper
          activeStep={activeStep}
          changeStep={changeStep}
          subgenres={subgenres}
          newSubgenre={newSubgenre}
          subgenre={subgenre}
          genre={genre}
        >
          <Form
            className={classes.contentWrapper}
            onSubmit={handleSubmit(createBook)}
          >
            <Grid container spacing={3} className={classes.contentBlock}>
              {this.renderContent()}
            </Grid>
          </Form>
        </Stepper>
      </div>
    );
  }
}

const selector = formValueSelector("newBook");

const mapStateToProps = state => {
  const genres = state.bookReducer.genres;
  const genre = selector(state, "genre");
  const subgenre = selector(state, "subgenre");
  const selectedGenre =
    genres.length && genres.find(item => item.name === genre);
  return {
    genre,
    subgenre,
    genres,
    activeStep: state.stepReducer.activeStep,
    subgenres: selectedGenre && selectedGenre.subgenres,
    newSubgenre: state.subgenreReducer.newSubgenre
  };
};

const mapDispatchToProps = {
  receiveGenres,
  changeStep,
  createNewSubgenre,
  createBook,
  untouch
};

export default compose(
  withStyles(styles),
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  reduxForm({
    form: "newBook",
    validate
  })
)(NewBookPage);
