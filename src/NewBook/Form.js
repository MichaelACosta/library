import React, { useState } from "react";
import PropTypes from "prop-types";
import injectSheet from "react-jss";
import { connect } from "react-redux";
import * as actions from "./actions";
import { getStatus } from "./reducer";

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
  select: {
    borderRadius: 25,
    width: 250,
    height: 25,
    textAlign: "center",
    marginBottom: 5,
    border: "none",
    fontSize: 12,
    textDecoration: "none",
    outline: "none"
  }
};

const Form = ({ classes, sendReport, statusList }) => {
  const [isbn, setIsbn] = useState("ISBN");
  const [title, setTitle] = useState("Title");
  const [author, setAuthor] = useState("Author");
  const [purchaseDate, setPurchaseDate] = useState("Purchase Date");
  const [editDate, setEditDate] = useState("Edit Date");
  const [status, setStatus] = useState("read");

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
    setStatus("read");
    event.preventDefault();
  };

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <label>
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
        <select className={classes.select} onChange={handleChangeStatus}>
          {statusList.map(
            prop =>
              <option key={prop} value={prop}>{prop}</option>
          )}
        </select>
        <input className={classes.send} type="submit" value="SEND" />
      </label>
    </form >
  );
};

Form.propTypes = {
  classes: PropTypes.object.isRequired,
  statusList: PropTypes.array.isRequired,
  sendReport: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  statusList: getStatus(state)
});

const mapDispatchToProps = dispatch => ({
  sendReport(message) {
    dispatch(actions.sendBook(message));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(injectSheet(style)(Form));
