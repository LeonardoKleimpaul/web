function parOuImpar(numero) {
  if (numero % 2 == 0) {
    console.log(`O número ${numero} é par`)
  } else {
    console.log(`O número ${numero} é impar`)
  }
}

parOuImpar(2)

let parOuImpar2 = numero => {
  if (numero % 2 == 0) {
    return `O número ${numero} é par.`
  } else {
    result = 'impar'
    return `O número ${numero} é impar.`
  }
}

console.log(parOuImpar2(88))

let parOuImpar3 = numero => (numero % 2 == 0 ? 'par' : 'impar')

console.log(`O número é ${parOuImpar3(4)}.`)
