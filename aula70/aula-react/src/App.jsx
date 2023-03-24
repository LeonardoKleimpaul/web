import Primeiro from "./components/Primeiro";
import Contador from "./components/Contador";
import Lista from "./components/Lista";

function App() {
  return (
    <>
      <Primeiro titulo="Meu app de React" descricao="descricao 1">
        Filho
      </Primeiro>

      <Contador />
      <Lista />
    </>
  );
}

export default App;
