const fs = require('fs')

const leArquivo = arquivo =>
  new Promise((resolve, reject) => {
    fs.readFile(arquivo, 'utf-8', (erro, conteudo) => {
      if (erro) {
        reject(erro)
      } else {
        resolve(conteudo)
      }
    })
  })

leitura = async () => {
  let arq1 = await leArquivo('./in1.txt')
  let arq2 = await leArquivo('./in2.txt')
  return arq1 + '\n' + arq2
}

leitura()
  .then(resultado => console.log(resultado))
  .then(() => console.log('Operacões finalizadas!'))
