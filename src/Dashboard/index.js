import React from "react";
import PropTypes from "prop-types";
import injectSheet from "react-jss";
import { connect } from "react-redux";
import { getBooks } from "./reducer";

const style = {
  box: {
    display: "flex",
    justifyContent: "center"
  },
  card: {
    marginRight: 50
  }
};

const Dashboard = ({ classes, books }) => (
  <div className={classes.box}>
    {books.map(book => {
      return (
        <div key={book.isbn} className={classes.card}>
          <h1>{book.title}</h1>
          <p>{book.autor}</p>
          <p>{book.purchaseDate}</p>
          <p>{book.editDate}</p>
          <p>{book.status}</p>
        </div>
      );
    })}
  </div>
);

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired,
  books: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  books: getBooks(state)
});

export default connect(mapStateToProps)(injectSheet(style)(Dashboard));
