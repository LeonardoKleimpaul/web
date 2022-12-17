// Questão 1 \------------------------------/

const produtos = [
  { nome: 'Notebook Samsumg', preco: 4999.99, vendido: true, tipo: 'notebook' },
  { nome: 'Notebook Sony', preco: 5999.99, vendido: false, tipo: 'notebook' },
  { nome: 'iPad', preco: 6999.99, vendido: false, tipo: 'tablet' },
  { nome: 'iPhone', preco: 7999.99, vendido: true, tipo: 'smartphone' },
  { nome: 'Copo de plástico', preco: 1.99, vendido: false, tipo: 'copo' },
  { nome: 'Copo de vidro', preco: 10.99, vendido: true, tipo: 'copo' },
]

const filtro1 = produtos
  .filter(e => {
    return e.preco > 5000
  })
  .map(e => {
    return e.nome
  })

//console.table(filtro1)

// Questão 2 \------------------------------/
const carrinho = [
  '{ "nome": "Borracha", "preco": 3.45 }',
  '{ "nome": "Caderno", "preco": 13.90 }',
  '{ "nome": "Lápis", "preco": 2.5 }',
  '{ "nome": "Caneta", "preco": 7.5 }',
]

const carrinhos = carrinho.map(e => JSON.parse(e))

//console.log(carrinhos)

const precos = carrinhos.map(e => {
  return e.preco
})

//console.log(precos)

// Questão 3 \------------------------------/

const num = [2, 4, 1, 3, 2]

const produtorio = num.reduce((acumulador, atual) => {
  //console.log(acumulador, atual)
  return acumulador * atual
})

//console.log(produtorio)

// Questão 4 \------------------------------/

const alunos = [
  { nome: 'Fulana', nota: 7.3, bolsista: false },
  { nome: 'Beltrana', nota: 9.2, bolsista: false },
  { nome: 'Sicrana', nota: 9.8, bolsista: false },
  { nome: 'Maria das Dores', nota: 8.7, bolsista: true },
]

const mediaNotas = alunos
  .map(e => {
    let notas = e.nota
    return notas
  })
  .reduce((acumulador, atual) => {
    return (acumulador += atual)
  })

//console.log('O somatório das notas é: ', mediaNotas)

const bolsistas = alunos.map(e => {
  return e.bolsista
})

// Questão 4 A \------------------------------/

// const verificaBolsa = bolsistas.reduce((acumulador, atual) => {
//console.log(acumulador, atual)
//   if (acumulador == atual && atual == true) {
//     return true
//   } else {
//     return false
//   }
// }, true)

//console.log(bolsistas)

//console.log(verificaBolsa)

// Questão 4 B \------------------------------/

const verificaBolsa2 = bolsistas.reduce((acumulador, atual) => {
  //console.log(acumulador, atual)
  if (acumulador == atual) {
    return acumulador
  } else {
    return true
  }
}, false)

console.log(bolsistas)

console.log(verificaBolsa2)
