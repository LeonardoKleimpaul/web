const numeros = [5, 3, 2, 7]

const soma = numeros.reduce((acumulador, atual) => {
  console.log(acumulador, atual)
  return acumulador + atual
}, 0)

console.log(soma)

console.log('-  -  -  -  -  -  -  -  -  -  -')

const multiplicador = numeros.reduce((acumulador, atual) => {
  console.log(acumulador, atual)
  return acumulador * atual
}, 1)

console.log(multiplicador)
