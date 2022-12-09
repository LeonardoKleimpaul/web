const animais = ['gato', 'cachorro', 'passarinho']
const sons = ['mia', 'late', 'canta']


const funcao = (animal, indice) => {
  console.log(animal, sons[indice]);
}

animais.forEach(funcao)