import { title } from "process";
import { string } from "prop-types";
import React, { Component } from "react";
import ChakraDemo from "./components/ChakraDemo";
import TypescriptDemo from "./components/TypescriptDemo";
import Layout from "./layouts/index";
interface Description {
  title: string
}
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Layout>
          <p style={{minHeight:"300px"}}>this is content</p>
        </Layout>
      </React.Fragment>
    );
  }
}

export default App;
