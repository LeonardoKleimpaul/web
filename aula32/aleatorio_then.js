const aleatorio = () => {
  return Promise.resolve(Math.trunc(Math.random() * 100))
}

const somaAleatoria = () => {
  let primeiro, segundo, terceiro

  return aleatorio()
    .then(v => {
      primeiro = v
      return aleatorio()
    })
    .then(v => {
      segundo = v
      return aleatorio()
    })
    .then(v => {
      terceiro = v
      return primeiro + segundo + terceiro
    })
    .then(v => {
      console.log(`${primeiro} + ${segundo} + ${terceiro} = ${v}`)
    })
}

somaAleatoria()
