import Pessoa from "./pessoa/Pessoa";

function lista() {
  const pessoas = [
    { nome: "Pedro", sexo: "M", idade: 20 },
    { nome: "Herculano", sexo: "M", idade: 18 },
    { nome: "Fulana", sexo: "F", idade: 21 },
  ];

  return (
    <div>
      <h1>Lista</h1>
      {pessoas.map((pessoa, index) => (
        <Pessoa key={index} pessoa={pessoa} />
      ))}
    </div>
  );
}

export default lista;
