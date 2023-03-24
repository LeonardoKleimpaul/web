import { useState } from "react";
import styles from "./index.module.css";

function Pessoa(props) {
  const [verificado, setVerificado] = useState(false);
  const pessoa = props.pessoa;

  function alternarVerificado() {
    setVerificado(!verificado);
  }

  return (
    <div className={styles.container}>
      <h3>Nome: {pessoa.nome}</h3>
      <h4>Sexo: {pessoa.sexo}</h4>
      <h4>Idade: {pessoa.idade}</h4>
      <input onClick={alternarVerificado} type="checkbox" />
      {verificado ? (
        <bold className={styles.verificado}>Verificado</bold>
      ) : (
        <span className={styles.naoVerificado}>Nao Verificado</span>
      )}
    </div>
  );
}

export default Pessoa;
