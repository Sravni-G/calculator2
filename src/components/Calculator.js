import Button from "./Button.js";
import Display from "./Display.js";
import React from "react";

export default class Calculator extends React.Component {
  constructor() {
    super();
    this.state = {
      input: "",
    };
  }

  handleInput = (symbol) => {
    let { input } = this.state;
    let answer = 0;
    if (symbol === "=") {
      answer = eval(input);
    } else if (symbol === "AC") {
      console.log("called AC");
      answer = "";
    } else if (symbol === "DEL") {
      let n = input.substring(0, input.length - 1);
      answer = n;
    } else {
      console.log(symbol);
      input += symbol;
      answer = input;
    }

    this.setState({ input: String(answer) });
  };

  render() {
    return (
      <div>
        <Display input={this.state.input} inputHandler={this.handleInput} />
        <Button inputHandler={this.handleInput} />
      </div>
    );
  }
}
