import React, { Component } from "react";

class TransactionForm extends Component {
  state = {
    ...this.returnStateObject(),
  };

  returnStateObject() {
    if (this.props.currentIndex === -1)
      return {
        bAccountNo: "",
        iFSC: "",
        bName: "",
        amount: "",
        Mail: "",
      };
    else return this.props.list[this.props.currentIndex];
  }

  componentDidUpdate(prevProps) {
    if (
      prevProps.currentIndex !== this.props.currentIndex ||
      prevProps.list !== this.props.list
    ) {
      this.setState({ ...this.returnStateObject() });
      console.log(prevProps, this.props);
    }
  }

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onAddOrEdit(this.state);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} autoComplete="off">
        <input
          name="bAccountNo"
          placeholder="Enter Account Number"
          onChange={this.handleInputChange}
          value={this.state.bAccountNo}
        />
        <br />
        <input
          name="iFSC"
          placeholder="Enter ID"
          onChange={this.handleInputChange}
          value={this.state.iFSC}
        />
        <br />
        <input
          name="bName"
          placeholder="Adress"
          onChange={this.handleInputChange}
          value={this.state.bName}
        />
        <br />
        <input
          name="amount"
          placeholder="Amount"
          onChange={this.handleInputChange}
          value={this.state.amount}
        />
        <br />
        <input
          name="Mail"
          placeholder="Mail"
          onChange={this.handleInputChange}
          value={this.state.Mail}
        />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default TransactionForm;
