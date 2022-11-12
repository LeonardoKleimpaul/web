const express = require('express')
const cors = require('cors')

const app = express()
const porta = 8080

// Configuração do CORS
app.use(cors({ origin: '*' }))

// Instancia o servidor
app.listen(porta, () => console.log(`Servidor iniciado na porta ${porta}`))

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

app.get('/processa-requisicao', function (req, res) {
  sleep(3000).then(() => {
    res.status(200).send('<h2>Olá Mundo!</h2>')
  })
})

app.get('/devolve-json', function (req, res) {
  const nome = req.query['nome']
  console.log(nome)
  const pessoa = {
    nome,
    idade: 42,
    salario: 123.45,
    data: new Date()
  }

  res.status(201).json(pessoa)
})
