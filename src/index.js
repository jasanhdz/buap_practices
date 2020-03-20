import React from "react";
import ReactDom from "react-dom";
import App from "./routes/App";

const container = document.getElementById("app");

ReactDom.render(<App />, container);
