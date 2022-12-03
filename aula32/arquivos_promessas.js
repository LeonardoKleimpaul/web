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

leArquivo('./in1.txt')
  .then(dados => {
    console.log('Arquivo in1.txt: ', dados)
    return leArquivo('./in2.txt')
  })
  .then(dados => {
    console.log('Arquivo in2.txt: ', dados)
  })
  .catch(erro => console.log(erro))
  .finally(() => {
    console.log('Leitura dos arquivos finalizada!')
  })
