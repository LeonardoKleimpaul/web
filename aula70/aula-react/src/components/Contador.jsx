import React, { useState } from "react";

function Contador() {
  const [contador, setContador] = React.useState(0);
  const [mostrarContador, setMostrarContador] = useState(true);

  function aumentarContador() {
    setContador(contador + 1);
  }

  function diminuirContador() {
    setContador((anterior) => anterior - 1);
  }

  function zerarContador() {
    setContador(0);
  }

  function alterarVisualizacaoContador(params) {
    setMostrarContador(!mostrarContador);
  }

  return (
    <div>
      <button onClick={alterarVisualizacaoContador}>
        Alternar Visualização do Contador
      </button>
      {mostrarContador === true && (
        <div>
          <h3>{contador}</h3>
          <button onClick={aumentarContador}> + </button>
          <button onClick={diminuirContador}> - </button>
          <button onClick={zerarContador}> Zerar Contador </button>
        </div>
      )}
    </div>
  );
}

export default Contador;
