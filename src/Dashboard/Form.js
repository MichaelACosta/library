import React from "react";
import PropTypes from "prop-types";
import injectSheet from "react-jss";
import { connect } from "react-redux";
import * as actions from "./actions";

const style = {
  box: {
    display: "flex",
    justifyContent: "center"
  },
  send: {
    fontFamily: "Roboto",
    fontSize: 12,
    fontWeight: "bold",
    color: "#4c84ff",
    border: "none",
    textDecoration: "none",
    outline: "none",
    cursor: "pointer"
  },
  form: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    width: 288
  },
  text: {
    width: 201,
    height: 14,
    border: "none",
    fontFamily: "Roboto",
    fontSize: 12,
    color: "rgba(108, 108, 108, 0.5)",
    textDecoration: "none",
    outline: "none"
  },
  "@media (min-width: 321px)": {
    form: {
      width: 348
    }
  },
  "@media (min-width: 769px)": {
    form: {
      width: 312
    }
  }
};

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isbn: "ISBN",
      title: "Title",
      autor: "Autor",
      purchaseDate: "Purchase Date",
      editDate: "Edit Date",
      status: "Status"
    };

    this.handleChangeTitle = this.handleChangeTitle.bind(this);
    this.handleChangeAutor = this.handleChangeAutor.bind(this);
    this.handleChangeIsbn = this.handleChangeIsbn.bind(this);
    this.handleChangePurchase = this.handleChangePurchase.bind(this);
    this.handleChangeEdit = this.handleChangeEdit.bind(this);
    this.handleChangeStatus = this.handleChangeStatus.bind(this);
    this.handleClickTitle = this.handleClickTitle.bind(this);
    this.handleClickAutor = this.handleClickAutor.bind(this);
    this.handleClickIsbn = this.handleClickIsbn.bind(this);
    this.handleClickPurchase = this.handleClickPurchase.bind(this);
    this.handleClickEdit = this.handleClickEdit.bind(this);
    this.handleClickStatus = this.handleClickStatus.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleClickTitle(event) {
    this.setState({ title: "" });
  }

  handleClickAutor(event) {
    this.setState({ autor: "" });
  }

  handleClickIsbn(event) {
    this.setState({ isbn: "" });
  }

  handleClickPurchase(event) {
    this.setState({ purchaseDate: "" });
  }

  handleClickEdit(event) {
    this.setState({ editDate: "" });
  }

  handleClickStatus(event) {
    this.setState({ status: "" });
  }

  handleChangeTitle(event) {
    this.setState({ title: event.target.value });
  }

  handleChangeAutor(event) {
    this.setState({ autor: event.target.value });
  }

  handleChangeIsbn(event) {
    this.setState({ isbn: event.target.value });
  }

  handleChangePurchase(event) {
    this.setState({ purchaseDate: event.target.value });
  }

  handleChangeEdit(event) {
    this.setState({ editDate: event.target.value });
  }

  handleChangeStatus(event) {
    this.setState({ status: event.target.value });
  }

  handleSubmit(event) {
    const { sendReport } = this.props;
    sendReport({
      isbn: this.state.isbn,
      title: this.state.title,
      autor: this.state.autor,
      purchaseDate: this.state.purchaseDate,
      editDate: this.state.editDate,
      status: this.state.status
    });
    this.setState({
      isbn: "ISBN",
      title: "Title",
      autor: "Autor",
      purchaseDate: 2019,
      editDate: 2019,
      status: "Read"
    });
    event.preventDefault();
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.box}>
        <form className={classes.form} onSubmit={this.handleSubmit}>
          <label>
            <input
              className={classes.text}
              type="text"
              value={this.state.isbn}
              onChange={this.handleChangeIsbn}
              onClick={this.handleClickIsbn}
            />
            <input
              className={classes.text}
              type="text"
              value={this.state.title}
              onChange={this.handleChangeTitle}
              onClick={this.handleClickTitle}
            />
            <input
              className={classes.text}
              type="text"
              value={this.state.autor}
              onChange={this.handleChangeAutor}
              onClick={this.handleClickAutor}
            />
            <input
              className={classes.text}
              type="text"
              value={this.state.purchaseDate}
              onChange={this.handleChangePurchase}
              onClick={this.handleClickPurchase}
            />
            <input
              className={classes.text}
              type="text"
              value={this.state.editDate}
              onChange={this.handleChangeEdit}
              onClick={this.handleClickEdit}
            />
            <input
              className={classes.text}
              type="text"
              value={this.state.status}
              onChange={this.handleChangeStatus}
              onClick={this.handleClickStatus}
            />
          </label>
          <input className={classes.send} type="submit" value="SEND" />
        </form>
      </div>
    );
  }
}

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
