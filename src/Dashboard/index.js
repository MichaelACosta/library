import React from "react";
import PropTypes from "prop-types";
import injectSheet from "react-jss";
import { connect } from "react-redux";
import { getBooks } from "./reducer";
import * as actions from "./actions";

const style = {
  box: {
    display: "flex",
    justifyContent: "center"
  },
  card: {
    marginRight: 50
  }
};

class Dashboard extends React.Component {
  componentWillMount() {
    const { loadBooks } = this.props;
    loadBooks();
  }
  render() {
    const { classes, books } = this.props;
    return (
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
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired,
  books: PropTypes.array.isRequired,
  loadBooks: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  books: getBooks(state)
});

const mapDispatchToProps = dispatch => ({
  loadBooks() {
    setInterval(() => dispatch(actions.fetchBooks()), 1000);
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(injectSheet(style)(Dashboard));
