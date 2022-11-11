// Function
function quadrado(numero) {
  return numero * numero
}

console.log('Function: ', quadrado(5))

// Função Anônima
let quadrado1 = function (numero) {
  return numero * numero
}

console.log('Function Anônima: ', quadrado(5))

// Arrow Function
let quadrado2 = numero => {
  return numero * numero
}

console.log('Arrow Function: ', quadrado2(5))

// Arrow Function simples
let quadrado3 = numero => {
  return numero * numero
}

console.log('Arrow Function simples: ', quadrado2(5))

// Arrow Function com return implícito
let quadrado4 = numero => numero * numero
console.log('Arrow Function com return implícito: ', quadrado2(5))
