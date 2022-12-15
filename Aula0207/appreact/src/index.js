import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Exercicio from "./Exercicio";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <Exercicio />
  </React.StrictMode>
);
