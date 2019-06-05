import React from "react";
import PropTypes from "prop-types";
import injectSheet from "react-jss";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { Link } from "react-router-dom";

const style = {
  toolBar: {
    marginLeft: 40,
    marginRight: 40,
    justifyContent: "space-between"
  },
  label: {
    fontSize: 20,
    fontWeight: 600
  },
  boxButton: {
    display: "flex"
  },
  button: {
    textDecoration: "none",
    color: "black"
  },
  buttonStyle: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 30,
    width: 100,
    border: "1px solid black",
    marginRight: 10,
    borderRadius: "5%"
  }
};

const Header = ({ classes }) => (
  <AppBar position="static" color="default">
    <Toolbar className={classes.toolBar}>
      <span className={classes.label}>My library</span>
      <div className={classes.boxButton}>
        <div className={classes.buttonStyle}>
          <Link to={"/"} variant="contained" className={classes.button}>
            Dashboard
          </Link>
        </div>
        <div className={classes.buttonStyle}>
          <Link to={"/"} variant="contained" className={classes.button}>
            New Book
          </Link>
        </div>
      </div>
    </Toolbar>
  </AppBar>
);

Header.propTypes = {
  classes: PropTypes.object.isRequired
};

export default injectSheet(style)(Header);
