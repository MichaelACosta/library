import React, { useState } from "react";
import PropTypes from "prop-types";
import injectSheet from "react-jss";
import { connect } from "react-redux";
import * as actions from "./actions";

const style = {
  send: {
    fontFamily: "Roboto",
    fontSize: 12,
    fontWeight: "bold",
    color: "#4c84ff",
    border: "none",
    textDecoration: "none",
    outline: "none",
    cursor: "pointer",
    borderRadius: 10,
    width: 100,
    height: 30
  },
  form: {
    margin: "auto",
    width: 288
  },
  text: {
    marginBottom: 1,
    width: 201,
    height: 14,
    border: "none",
    fontFamily: "Roboto",
    fontSize: 12,
    color: "rgba(108, 108, 108, 0.5)",
    textDecoration: "none",
    outline: "none"
  },
  label: {
    display: "block",
    marginBottom: 4
  },
  "@media (max-width: 768px)": {
    form: {
      display: "block",
      width: 348
    },
    send: {
      display: "block",
      margin: "auto",
      width: 70,
      height: 25
    }
  }
};

const Form = ({ classes, sendReport }) => {
  const [isbn, setIsbn] = useState("ISBN");
  const [title, setTitle] = useState("Title");
  const [author, setAuthor] = useState("Author");
  const [purchaseDate, setPurchaseDate] = useState("Purchase Date");
  const [editDate, setEditDate] = useState("Edit Date");
  const [status, setStatus] = useState("Status");

  const handleChangeTitle = event => {
    setTitle(event.target.value);
  };

  const handleChangeAuthor = event => {
    setAuthor(event.target.value);
  };

  const handleChangeIsbn = event => {
    setIsbn(event.target.value);
  };

  const handleChangePurchase = event => {
    setPurchaseDate(event.target.value);
  };

  const handleChangeEdit = event => {
    setEditDate(event.target.value);
  };

  const handleChangeStatus = event => {
    setStatus(event.target.value);
  };

  const handleSubmit = event => {
    sendReport({
      isbn: isbn,
      title: title,
      author: author,
      purchaseDate: purchaseDate,
      editDate: editDate,
      status: status
    });
    setIsbn("ISBN");
    setTitle("Title");
    setAuthor("Author");
    setPurchaseDate("Purchase Date");
    setEditDate("Edit Date");
    setStatus("Read");
    event.preventDefault();
  };

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <label className={classes.label}>
        <input
          className={classes.text}
          type="text"
          value={isbn}
          onChange={handleChangeIsbn}
          onClick={() => setIsbn("")}
        />
        <input
          className={classes.text}
          type="text"
          value={title}
          onChange={handleChangeTitle}
          onClick={() => setTitle("")}
        />
        <input
          className={classes.text}
          type="text"
          value={author}
          onChange={handleChangeAuthor}
          onClick={() => setAuthor("")}
        />
        <input
          className={classes.text}
          type="text"
          value={purchaseDate}
          onChange={handleChangePurchase}
          onClick={() => setPurchaseDate("")}
        />
        <input
          className={classes.text}
          type="text"
          value={editDate}
          onChange={handleChangeEdit}
          onClick={() => setEditDate("")}
        />
        <input
          className={classes.text}
          type="text"
          value={status}
          onChange={handleChangeStatus}
          onClick={() => setStatus("")}
        />
        <input className={classes.send} type="submit" value="SEND" />
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
    dispatch(actions.sendBook(message));
  }
});

export default connect(
  null,
  mapDispatchToProps
)(injectSheet(style)(Form));
