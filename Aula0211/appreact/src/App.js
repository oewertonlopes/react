import React from "react";
import Form from "./Form/Form";

const Titulo = ({ cor, texto, children }) => {
  return (
    <h1 style={{ color: cor }}>
      {texto},{children}
    </h1>
  );
};

const App = () => {
  return (
    <div>
      teste
      <Titulo cor="red" texto="Meu Titulo 1" />
      <Titulo cor="blue" texto="Meu Titulo 2" />
      <Titulo cor="green" texto="Meu Titulo 3">
        Isso é o children
        <p>Teste</p>
      </Titulo>
      <Form />
    </div>
  );
};

export default App;
