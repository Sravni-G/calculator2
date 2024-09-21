import React from "react";
import "../styles/Display.css";
class Display extends React.Component {
  render() {
    const { input, inputHandler } = this.props;
    return (
      <div className="display-container">
        <input
          type="text"
          name="input"
          value={input}
          onChange={inputHandler}
        ></input>
      </div>
    );
  }
}

export default Display;
