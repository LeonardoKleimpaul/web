let limparQuarto = new Promise((resolve, reject) => {
  console.log('Limpando o quarto...')
  setTimeout(() => {
    console.log('Terminei de limpar o quarto...')
    resolve('Limpei o quarto! ')
  }, 2000)
})

let retirarLixo = function (mensagem) {
  return new Promise((resolve, reject) => {
    console.log('Retirando o lixo...')
    setTimeout(() => {
      console.log('Terminei de retirar o lixo...')
      resolve(mensagem + '-> Retirei o lixo! ')
    }, 4000)
  })
}

let ganharSorvete = function (mensagem) {
  return new Promise((resolve, reject) => {
    console.log('Tomando sorvete...')
    setTimeout(() => {
      console.log('Terminei de tomar sorvete...')
      resolve(mensagem + '-> Ganhei sorvete! ')
    }, 6000)
  })
}

limparQuarto
  .then(resultado => {
    // Then do limpar quarto
    return retirarLixo(resultado)
  })
  .then(resultado => {
    // Then do retirar lixo
    return ganharSorvete(resultado)
  })
  .then(resultado => {
    // Then do ganhar sorvete
    console.log(resultado + '-> Fim!')
  })
