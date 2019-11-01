import React, { Component } from "react";
import  "./Input.css";


class Input extends Component {
  isOperator = val => {
    return !isNaN(val) || val === "." || val === "=";
  }


  render() {
    return (
      <div className="input">
        {this.props.children}
      </div>
    );
  }
}

export default Input;
