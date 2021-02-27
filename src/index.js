import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reducer, { initialState } from "./Reducer";
import StateProvider from "./StateProvider";

ReactDOM.render(
  <>
    <StateProvider reducer={reducer} initialState={initialState}>
      <App />
    </StateProvider>
  </>,
  document.getElementById("root")
);

