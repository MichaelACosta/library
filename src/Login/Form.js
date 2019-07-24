import React, { useState } from "react";
import PropTypes from "prop-types";
import injectSheet from "react-jss";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

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
  },
  singUp: {
    fontSize: 12,
    marginLeft: 15,
    textDecoration: "none",
    outline: "none",
    color: "black"
  }
};

const Form = ({ classes, sendReport }) => {
  const [user, setUser] = useState("user");
  const [password, setPassword] = useState("password");

  const handleChangeUser = event => {
    setUser(event.target.value);
  };

  const handleChangePassword = event => {
    setPassword(event.target.value);
  };

  const handleSubmit = event => {
    sendReport({
      user: user,
      password: password
    });
    setUser("user");
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
          type="text"
          value={password}
          onChange={handleChangePassword}
          onClick={() => setPassword("")}
        />
        <input className={classes.send} type="submit" value="Login" />
        <Link to={"/singup"} variant="contained" className={classes.singUp}>
          Sing up
        </Link>
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
    dispatch(null);
  }
});

export default connect(
  null,
  mapDispatchToProps
)(injectSheet(style)(Form));
