import React from "react";
import Form from "./Form/Form";
import Header from "./Header";
import Home from "./Home";
import Produtos from "./Produtos";

const Titulo = ({ cor, texto, children }) => {
  return (
    <h1 style={{ color: cor }}>
      {texto},{children}
    </h1>
  );
};

const App = () => {
  const { pathname } = window.location;
  let Component;
  if (pathname === "/Produtos") {
    Component = Produtos;
  } else {
    Component = Home;
  }
  return (
    <div>
      {/*
        teste
        <Titulo cor="red" texto="Meu Titulo 1" />
        <Titulo cor="blue" texto="Meu Titulo 2" />
        <Titulo cor="green" texto="Meu Titulo 3">
          Isso é o children
          <p>Teste</p>
        </Titulo>
        <Form />
      */}
      <Header />
      <Component />
    </div>
  );
};

export default App;
