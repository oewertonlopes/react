/* eslint-disable no-unreachable */
import React from "react";

const Botao = () => {
  /* function handleClick(event) {
    console.log(event.target.innerText);
  }*/
  function handleScroll(event) {
    console.log(event);
  }
  window.addEventListener("scroll", handleScroll);
  return (
    <div style={{ height: "200vh" }}>
      <button>Clique</button>
    </div>
  );
};

export default Botao;
