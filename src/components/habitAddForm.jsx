import React, { PureComponent } from "react";

class HabitAddForm extends PureComponent {
  formRef = React.createRef();
  inputRef = React.createRef(); //*

  onSubmit = (event) => {
    event.preventDefault();
    const habitname = this.inputRef.current.value; //* input
    habitname && this.props.onAdd(habitname);
    // this.inputRef.current.value = "";
    this.formRef.current.reset(); // 정석적인 방법.
  };

  render() {
    return (
      <form ref={this.formRef} className="add-from" onSubmit={this.onSubmit}>
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
