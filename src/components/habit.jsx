import React, { Component } from "react";

class Habit extends Component {
  state = {
    count: 0,
  };
  handleincrement = (e) => {
    // state object 안에 있는 count를 증가시키고 state를 업데이트 해야 함.
    this.setState({ count: this.state.count + 1 });
  };
  handledecrement = (e) => {
    // state object 안에 있는 count를 증가시키고 state를 업데이트 해야 함.
    const count = this.state.count - 1;
    this.setState({ count: count < 0 ? 0 : count });
  };
  render() {
    const { name, count } = this.props.habit;
    return (
      <li className="habit">
        <span className="habit-name">{name}</span>
        <span className="habit-count">{count}</span>
        <button
          className="habit-button habit-increase"
          onClick={this.handleincrement}
        >
          <i className="fas fa-plus-square"></i>
        </button>
        <button
          className="habit-button habit-decrease"
          onClick={this.handledecrement}
        >
          <i className="fas fa-minus-square"></i>
        </button>
        <button className="habit-button habit-delete">
          <i className="fas fa-trash"></i>
        </button>
      </li>
    );
  }
}

export default Habit;
