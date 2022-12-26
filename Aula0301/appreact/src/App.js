import React from "react";
import ButtonModal from "./ButtonModal";
import Modal from "./Modal";
import Exercicio from "./Exercicio";

const App = () => {
  /*
  const [ativo, setAtivo] = React.useState(false);
  const [dados, setDados] = React.useState({ nome: "Ewerton", idade: 33 });

  function handleClick() {
    setAtivo(!ativo);
    setDados({ ...dados, faculdade: 'Possui faculdade' });
  }

  const [modal, setModal] = React.useState(false);
  const [itens, setItens] = React.useState("Teste");
  function handleClick() {
    setItens("Outro");
  }*/

  const [dados, setDados] = React.useState(null);
  const [carregando, setCarregando] = React.useState(null);

  async function handleClick(event) {
    setCarregando(true);
    const response = await fetch(
      `https://api.chucknorris.io/jokes/random`
    );
    const json = await response.json();
    setDados(json);
    setCarregando(false);
  }

  return (
    <div>
      {/*<p>{dados.nome}</p>
      <p>{dados.idade}</p>
      <p>{dados.faculdade}</p>
      <button onClick={handleClick}>{ativo ? "Ativo" : "Inativo"}</button>
      <p>{itens}</p>
      <button onClick={handleClick}>Clicar</button>
      <Modal modal={modal} setModal={setModal} />
      <ButtonModal setModal={setModal} />*/}
      <button style={{ marginRight: ".5rem" }} onClick={handleClick}>
        Chuck Norris Facts
      </button>
      {carregando && <p>Carregando...</p>}
      {!carregando && dados && <Exercicio dados={dados} />}
    </div>
  );
};

export default App;
