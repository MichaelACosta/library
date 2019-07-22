import React from "react";
import PropTypes from "prop-types";
import injectSheet from "react-jss";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

const style = {
  content: {
    display: "flex",
    justifyContent: "center"
  },
  card: {
    width: 280,
    margin: "0 15px 10px 0"
  }
};

const CardDetails = ({ classes, book }) => (
  <Card className={classes.card}>
    <CardContent className={classes.content}>
      <div>
        <h2>{book.title}</h2>
        <h3>{book.author}</h3>
        <p>Purchase Date: {book.purchaseDate}</p>
        <p>Edit Date: {book.editDate}</p>
        <p>{book.status}</p>
      </div>
    </CardContent>
  </Card>
);

CardDetails.propTypes = {
  classes: PropTypes.object.isRequired,
  book: PropTypes.object.isRequired
};

export default injectSheet(style)(CardDetails);
