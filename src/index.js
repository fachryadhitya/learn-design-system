import React from "react";
import ReactDOM from "react-dom";
import {
  PrimaryButton,
  SecondaryButton,
  TertiaryButton,
} from "./Components/Button";
import { GlobalStyle } from "./utils";

const App = () => (
  <div>
    <TertiaryButton modifiers={"large"}>Hello!</TertiaryButton>
    <GlobalStyle />
  </div>
);

ReactDOM.render(<App />, document.querySelector("#root"));
