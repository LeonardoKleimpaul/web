const nome = 'Fulano'
const sobrenome = 'da Silva'
const idade = 42
const hobbies = ['cantar', 'dançar', 'ouvir música']

const fulano = {
  nome: nome,
  sobrenome: sobrenome,
  idade: idade,
  hobbies: hobbies,

  nomeCompleto: function () {
    return this.nome + ' ' + this.sobrenome
  }
}

//console.log(fulano)
console.log('Nome: ', fulano.nome)

console.log(fulano.nomeCompleto())
