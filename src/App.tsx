import React, { Component } from "react";
import ChakraDemo from "./components/ChakraDemo"
import TypescriptDemo from "./components/TypescriptDemo"
class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-gl-1">
            <ChakraDemo />
            <TypescriptDemo/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
