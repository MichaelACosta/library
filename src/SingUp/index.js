import React from "react";
import PropTypes from "prop-types";
import injectSheet from "react-jss";
import Form from "./Form";

const style = {
  box: {
    textAlign: "center",
    marginTop: 50
  }
};

const SingUp = ({ classes }) => (
  <div className={classes.box}>
    <h2>Sing Up</h2>
    <Form />
  </div>
);

SingUp.propTypes = {
  classes: PropTypes.object.isRequired
};

export default injectSheet(style)(SingUp);
