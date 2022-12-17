  import Usuario, { imprimirNome, imprimirIdade } from './usuario.js'

const fulano = new Usuario('Fulano', 42)
console.log(fulano)

imprimirNome(fulano)
imprimirIdade(fulano)
