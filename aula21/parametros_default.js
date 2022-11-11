// function somar(a = 0, b = 0) {
//   console.log('a = ', a)
//   console.log('b = ', b)
//   return a + b
// }

//console.log(somar(40,2))
//console.log(somar(42))
//console.log(somar())
//console.log(somar(undefined, 50))

//--------------------
//Arrow function
const saudacao = (pessoa = 'Fulano', saudacao = 'Olá') => {
  console.log(saudacao, pessoa)
}

saudacao()
saudacao('Pedro')
saudacao(undefined, 'Opa')
