import React from "react";
import PropTypes from "prop-types";
import injectSheet from "react-jss";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

const style = {
  toolBar: {
    marginLeft: 40,
    marginRight: 40
  },
  label: {
    fontSize: 20,
    fontWeight: 600
  }
};

const Header = ({ classes }) => (
  <AppBar position="static" color="default">
    <Toolbar className={classes.toolBar}>
      <span className={classes.label}>My library</span>
    </Toolbar>
  </AppBar>
);

Header.propTypes = {
  classes: PropTypes.object.isRequired
};

export default injectSheet(style)(Header);
