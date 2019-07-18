// @flow
import React from "react";
import { connect } from "react-redux";
import { submit } from "redux-form";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import {
  createNewSubgenre,
  clearNewSubgenre
} from "../../store/actions/subgenre";
type PropsT = {
  genre: string,
  subgenre: string,
  activeStep: number,
  changeStep: Function,
  children: React.Node,
  newSubgenre: boolean,
  createNewSubgenre: Function,
  clearNewSubgenre: Function,
  submitNewSubgenre: Function,
  submitNewBook: Function
};

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    flex: 1
  },
  buttonWrapper: {
    display: "flex",
    justifyContent: "flex-end",
    marginBottom: theme.spacing(2)
  },
  button: {
    marginRight: theme.spacing(2)
  }
}));

function CreationStepper(props: PropsT) {
  const {
    activeStep,
    changeStep,
    newSubgenre,
    submitNewSubgenre,
    submitNewBook
  } = props;

  function getSteps() {
    const steps = ["Genre", "Subgenre"];
    if (activeStep > 1) {
      if (newSubgenre) {
        steps.push("Add new subgenre", "Information");
      } else {
        steps.push("Information");
      }
    } else {
      steps.push("...");
    }
    return steps;
  }

  const classes = useStyles();
  const steps = getSteps();

  function handleNext() {
    switch (activeStep) {
      case 1:
        return props.subgenre === "Add new"
          ? props.createNewSubgenre()
          : changeStep(activeStep + 1);
      case 2:
        return newSubgenre ? submitNewSubgenre() : submitNewBook();
      case 3:
        return submitNewBook();
      default:
        return changeStep(activeStep + 1);
    }
  }

  function handleBack() {
    return activeStep === 2 && newSubgenre
      ? props.clearNewSubgenre()
      : changeStep(activeStep - 1);
  }

  function checkDisable() {
    switch (activeStep) {
      case 0:
        return !props.genre;
      case 1:
        return !props.subgenre;
      default:
        return false;
    }
  }

  return (
    <div className={classes.root}>
      <Stepper alternativeLabel nonLinear activeStep={activeStep}>
        {steps.map(label => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      {props.children}
      <div className={classes.buttonWrapper}>
        <Button
          variant="contained"
          disabled={activeStep === 0}
          onClick={handleBack}
          className={classes.button}
          size="large"
        >
          Back
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={handleNext}
          className={classes.button}
          size="large"
          disabled={checkDisable()}
        >
          Next
        </Button>
      </div>
    </div>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    createNewSubgenre: () => dispatch(createNewSubgenre()),
    clearNewSubgenre: () => dispatch(clearNewSubgenre()),
    submitNewSubgenre: () => dispatch(submit("newSubgenre")),
    submitNewBook: () => dispatch(submit("newBook"))
  };
};
export default connect(
  null,
  mapDispatchToProps
)(CreationStepper);
