import React, { useEffect } from "react";
import PropTypes from "prop-types";
import injectSheet from "react-jss";
import { connect } from "react-redux";
import * as actions from "./actions";
import Form from "./Form";

const style = {
  box: {
    textAlign: "center",
    marginTop: 50
  }
};

const NewBook = ({ classes, loadStatus }) => {
  useEffect(() => {
    loadStatus();
  })

  return (
    <div className={classes.box}>
      <h2>Register your book</h2>
      <Form />
    </div>
  );
}

NewBook.propTypes = {
  classes: PropTypes.object.isRequired,
  loadStatus: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
  loadStatus() {
    dispatch(actions.fetchStatus());
  }
});

export default connect(
  null,
  mapDispatchToProps
)(injectSheet(style)(NewBook));
