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

const NewBook = ({ classes }) => (
  <div className={classes.box}>
    <h2>Register your book</h2>
    <Form />
  </div>
);

NewBook.propTypes = {
  classes: PropTypes.object.isRequired
};

export default injectSheet(style)(NewBook);
