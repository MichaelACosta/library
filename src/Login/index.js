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

const Login = ({ classes }) => (
  <div className={classes.box}>
    <h2>Login</h2>
    <Form />
  </div>
);

Login.propTypes = {
  classes: PropTypes.object.isRequired
};

export default injectSheet(style)(Login);
