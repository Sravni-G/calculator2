import React from "react";
import "../styles/Button.css";

class Button extends React.Component {
  render() {
    const { inputHandler } = this.props;
    return (
      <div className="btn-container">
        <button className="span2" onClick={() => inputHandler("AC")}>
          AC
        </button>
        <button onClick={() => inputHandler("DEL")}>DEL</button>
        <button onClick={() => inputHandler("/")}>/</button>
        <button onClick={() => inputHandler("1")}>1</button>
        <button onClick={() => inputHandler("2")}>2</button>
        <button onClick={() => inputHandler("3")}>3</button>
        <button onClick={() => inputHandler("*")}>*</button>
        <button onClick={() => inputHandler("4")}>4</button>
        <button onClick={() => inputHandler("5")}>5</button>
        <button onClick={() => inputHandler("6")}>6</button>
        <button onClick={() => inputHandler("+")}>+</button>
        <button onClick={() => inputHandler("7")}>7</button>
        <button onClick={() => inputHandler("8")}>8</button>
        <button onClick={() => inputHandler("9")}>9</button>
        <button onClick={() => inputHandler("-")}>-</button>
        <button onClick={() => inputHandler(".")}>.</button>
        <button onClick={() => inputHandler("0")}>0</button>
        <button className="span2" onClick={() => inputHandler("=")}>
          =
        </button>
      </div>
    );
  }
}

export default Button;
