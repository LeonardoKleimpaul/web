let promessaDeLimparQuarto = new Promise((resolve, reject) => {
  /* Procedimento: Limpando o quarto
    ...
    ...
    ... */

  let estaLimpo = false

  if (estaLimpo) {
    resolve('está limpo!') // Promessa concluída
  } else {
    reject('não está limpo!') // Promessa não cumprida
  }
})

promessaDeLimparQuarto
  .then(function (resultadoOk) {
    console.log('O quarto ' + resultadoOk)
  })
  .catch(function (resultadoFalha) {
    console.log('O quarto ' + resultadoFalha)
  })
