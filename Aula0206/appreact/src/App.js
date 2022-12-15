import React from "react";

//EXERCICIO
/*
// Mostre os dados da aplicação, como aprensetado no vídeo
// Não utilize CSS externo, use o style para mudar as cores
// Se a situação estiver ativa pinte de verde, inativa vermelho
// Se o gasto for maior que 10000 mostre uma mensagem

const luana = {
  cliente: "Luana",
  idade: 27,
  compras: [
    { nome: "Notebook", preco: "R$ 2500" },
    { nome: "Geladeira", preco: "R$ 3000" },
    { nome: "Smartphone", preco: "R$ 1500" },
  ],
  ativa: true,
};

const mario = {
  cliente: "Mario",
  idade: 31,
  compras: [
    { nome: "Notebook", preco: "R$ 2500" },
    { nome: "Geladeira", preco: "R$ 3000" },
    { nome: "Smartphone", preco: "R$ 1500" },
    { nome: "Guitarra", preco: "R$ 3500" },
  ],
  ativa: false,
};

const App = () => {
  const dados = luana;
  const total = dados.compras
    .map((item) => +item.preco.replace("R$ ", ""))
    .reduce((a, b) => a + b);
  return (
    <>
      <p>Nome: {dados.cliente}</p>
      <p>Idade: {dados.idade}</p>
      <p>
        Situação:{" "}
        {dados.ativa ? (
          <span style={{ color: "green" }}>Ativa.</span>
        ) : (
          <span style={{ color: "red" }}>Inativa.</span>
        )}
      </p>
      <p>Total gasto: R$:{total}</p>
      {total > "10000" && <span>Você está gastando muito.</span>}
    </>
  );
};]*/

const titulo = <h1>Esse é um título</h1>;

const App = () => {
  const random = (Math.random() * 1000).toFixed();
  const ativo = true;
  function mostrarNomeESobrenome(sobrenome) {
    return "Ewerton " + sobrenome;
  }

  const carro = {
    marca: "Ford",
    rodas: 4,
  };

  const colorLink = {
    color: "green",
    textDecoration: "none",
    cursor: "pointer",
  };

  return (
    <>
      {titulo}
      {mostrarNomeESobrenome("Lopes")}
      <p className={ativo ? console.log("ok") : console.log("error")}>
        Meu número: {random}
      </p>
      <p>{new Date().toLocaleString()}</p>
      <p
        style={{
          backgroundColor: "red",
          color: "yellow",
          fontSize: "28px",
        }}
      >
        {carro.marca}
      </p>
      <p>{carro.rodas + " rodas"}</p>
      <a
        style={colorLink}
        target="_blank"
        className="ativo"
        href="https://google.com"
        title="Isso é um site!"
        rel="noreferrer"
      >
        Meu app
      </a>
      <label htmlFor="nome">Nome:</label>
      <input type="text" name="" id="nome" />
    </>
  );
};

export default App;
