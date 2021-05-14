import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <i className="fas fa-hands navbar-icon"></i>
        <span className="navbar-text">Habit Tracker</span>
        <span className="navbar-count">{this.props.totalCount}</span>
      </div>
    );
  }
}

export default Navbar;
