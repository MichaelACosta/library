import React from "react";
import PropTypes from "prop-types";
import injectSheet from "react-jss";
import { connect } from "react-redux";
import { getBooks } from "./reducer";
import * as actions from "./actions";
import CardDetails from "./CardDetails";

const style = {
  box: {
    display: "flex",
    justifyContent: "center",
    padding: "10px 0 0 0",
    flexWrap: "wrap"
  },
  card: {
    marginRight: 50
  }
};

class ListBook extends React.Component {
  componentWillMount() {
    const { loadBooks } = this.props;
    loadBooks();
  }
  render() {
    const { classes, books } = this.props;
    return (
      <div className={classes.box}>
        {books.map(book => {
          return <CardDetails book={book} key={book.title} />;
        })}
      </div>
    );
  }
}

ListBook.propTypes = {
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
)(injectSheet(style)(ListBook));
