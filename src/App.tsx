import { title } from "process";
import { string } from "prop-types";
import React, { Component } from "react";
import ChakraDemo from "./components/ChakraDemo";
import TypescriptDemo from "./components/TypescriptDemo";
interface Description {
  title: string
}
class App extends Component {
  render() {
    return (
      <div style={{marginTop:"50px"}} className="container">
        <div className="row">
          <div className="col-lg-12">
            <ChakraDemo />
            <TypescriptDemo Description/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
