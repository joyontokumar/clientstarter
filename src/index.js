/* global document */

import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import "bootstrap/scss/bootstrap.scss";

import App from "./App";
import store from "./store";
import { ChakraProvider } from "@chakra-ui/react"

render(
  <Provider store={store}>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </Provider>, document.getElementById("root")
);