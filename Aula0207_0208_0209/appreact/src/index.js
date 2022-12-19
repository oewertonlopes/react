import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Exercicio from "./Exercicio";
import Botao from "./Botao";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <Exercicio />
    <Botao />
  </React.StrictMode>
);
