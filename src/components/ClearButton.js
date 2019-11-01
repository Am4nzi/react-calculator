import React, { Component } from "react";
import  "./ClearButton.css";

class ClearButton extends Component {
  isOperator = val => {
    return !isNaN(val) || val === "." || val === "=";
  }

  render() {
    return (
      <div className="clear-btn"
      onClick={() => this.props.handleClear()}>
        {this.props.children}
      </div>
    );
  }
}

export default ClearButton;
