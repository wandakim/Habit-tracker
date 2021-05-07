import React, { Component } from "react";

class Habit extends Component {
  state = {
    count: 0,
  };
  handleincrement = (e) => {
    // state object 안에 있는 count를 증가시키고 state를 업데이트 해야 함.
    this.setState({ count: this.state.count + 1 });
  };
  render() {
    return (
      <li className="habit">
        <span className="habit-name">Reading</span>
        <span className="habit-count">{this.state.count}</span>
        <button
          className="habit-button habit-increase"
          onClick={this.handleincrement}
        >
          <i className="fas fa-plus-square"></i>
        </button>
        <button className="habit-button habit-decrease">
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
