let promessa = new Promise((resolve, reject) => {
  try {
    throw new Error('Forçando um erro!')
    // Promessa executada com sucesso
    setTimeout(() => {
      // Ponto de solução da promessa
      resolve('Promessa concluída com sucesso!')
      console.log('Promessa cumprida!')
    }, 3000)
  } catch (erro) {
    // Erro na execução da promessa

    setTimeout(() => {
      // Promessa rejeitada
      reject(erro)
    }, 3000)
  }
})

setTimeout(() => {
  console.log(promessa)
}, 5000)
