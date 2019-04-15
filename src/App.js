import React, { Component } from "react";
import "./App.css";
import Quiz from "./Quiz";

class App extends Component {
  state = {};

  render() {
    return (
      <>

        <div className="page-container">
          <Quiz></Quiz>

        </div>
      </>
    );
  }
}

export default App;
