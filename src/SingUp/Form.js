import React, { useState } from "react";
import PropTypes from "prop-types";
import injectSheet from "react-jss";
import { connect } from "react-redux";
import * as actions from "./actions";

const style = {
  send: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#4c84ff",
    border: "none",
    textDecoration: "none",
    outline: "none",
    cursor: "pointer",
    borderRadius: 40,
    width: 100,
    height: 30
  },
  form: {
    margin: "auto",
    width: 288
  },
  text: {
    borderRadius: 25,
    width: 250,
    height: 25,
    textAlign: "center",
    marginBottom: 5,
    border: "none",
    fontSize: 12,
    color: "rgba(108, 108, 108, 0.5)",
    textDecoration: "none",
    outline: "none"
  }
};

const Form = ({ classes, sendReport }) => {
  const [user, setUser] = useState("user");
  const [email, setEmail] = useState("email");
  const [password, setPassword] = useState("password");

  const handleChangeUser = event => {
    setUser(event.target.value);
  };

  const handleChangeEmail = event => {
    setEmail(event.target.value);
  };

  const handleChangePassword = event => {
    setPassword(event.target.value);
  };

  const handleSubmit = event => {
    sendReport({
      user: user,
      email: email,
      password: password
    });
    setUser("user");
    setEmail("email");
    setPassword("password");
    event.preventDefault();
  };

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <label>
        <input
          className={classes.text}
          type="text"
          value={user}
          onChange={handleChangeUser}
          onClick={() => setUser("")}
        />
        <input
          className={classes.text}
          type="email"
          value={email}
          onChange={handleChangeEmail}
          onClick={() => setEmail("")}
        />
        <input
          className={classes.text}
          type="password"
          value={password}
          onChange={handleChangePassword}
          onClick={() => setPassword("")}
        />
        <input className={classes.send} type="submit" value="Sing Up" />
      </label>
    </form>
  );
};

Form.propTypes = {
  classes: PropTypes.object.isRequired,
  sendReport: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
  sendReport(message) {
    dispatch(actions.sendUser(message));
  }
});

export default connect(
  null,
  mapDispatchToProps
)(injectSheet(style)(Form));
