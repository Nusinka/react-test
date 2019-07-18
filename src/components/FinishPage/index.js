// @flow
import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import DoneIcon from "@material-ui/icons/DoneRounded";

const classes = {
  wrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
    margin: "0 auto"
  },
  icon: {
    color: "#ffffff",
    width: "150px",
    height: "150px",
    background: "#32CD32",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }
};

export default function FinishPage() {
  return (
    <div style={classes.wrapper}>
      <div style={classes.icon}>
        <DoneIcon fontSize="large" />
      </div>
      Book added successfully
      <Link to="/">
        <Button variant="contained" color="primary">
          Add another book
        </Button>
      </Link>
    </div>
  );
}
