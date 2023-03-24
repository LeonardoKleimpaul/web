function Primeiro(props) {
  return (
    <div>
      <h1>{props.titulo}</h1>
      <h2>{props.descricao}</h2>
      <p>{props.children}</p>
    </div>
  );
}

export default Primeiro;
