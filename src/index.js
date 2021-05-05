import { StrictMode } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./containers/App";
import "tachyons";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <div>
      <App />
    </div>
  </StrictMode>,
  rootElement
);
