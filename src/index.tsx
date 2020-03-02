import React, { Fragment } from "react";
import ReactDOM from "react-dom";

class MainMenu extends React.Component {
  render() {
    return (
      <div>
        <button>Play Game</button>
      </div>
    );
  }
}

ReactDOM.render(<MainMenu />, document.getElementById("root") as HTMLElement);
