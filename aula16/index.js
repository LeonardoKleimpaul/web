let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] % 2 == 0) {
    console.log(`O número ${numeros[i]} é par`)
  }
}

for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] % 2 != 0) {
    console.log(`O número ${numeros[i]} é impar`)
  }
}

//-----------------------------------------------------

let cont = 1
let sum = 0

while (cont <= 50) {
  if (cont % 2 == 0) {
    console.log(cont)
    sum = sum + cont
  }
  cont = cont + 1
}
console.log('a soma dos números é de:' + sum)

//-----------------------------------------------------

function maiorMenor(x, y) {
  if (x > y) {
    console.log(`O numero ${x} é maior que o numero ${y}`)
  } else if (y > x) {
    console.log(`O numero ${y} é maior que o numero ${x}`)
  } else {
    console.log('Os numeros sao iguais')
  }
}
maiorMenor(10, 10)

//-----------------------------------------------------

function multiplica(x, y) {
  const result = x * y
  return result
}
console.log(multiplica(5, 5))

//-----------------------------------------------------

function conta(params) {}
