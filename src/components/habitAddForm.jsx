import React, { Component } from "react";

class HabitAddForm extends Component {
  inputRef = React.createRef(); //*

  onSubmit = (event) => {
    event.preventDefault();
    const habitname = this.inputRef.current.value; //* input
    habitname && this.props.onAdd(habitname);
    this.inputRef.current.value = ""; //?
  };

  render() {
    return (
      <form className="add-from" onSubmit={this.onSubmit}>
        <input
          ref={this.inputRef}
          type="text"
          className="add-input"
          placeholder="Habit"
        />
        <button className="add-button">Add</button>
      </form>
    );
  }
}

export default HabitAddForm;
