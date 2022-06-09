import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import Context from "./components/Context/Products.context"
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Context.ProductsContext>
        <App />
      </Context.ProductsContext>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
