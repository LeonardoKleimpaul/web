const express = require('express')

const app = express()
const porta = 8080

// Instancia o servidor
app.listen(porta, () => console.log(`Servidor iniciado na porta: ${porta}`))

// Responde a requisição no endereço http://localhost:8080/
app.get('/', (request, response) => {
  response.status(200).send('<h2>Exemplo de servidor node.js</h2>')
})

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

// Tratamento da requisição GET
app.get('/processa-calc', function (req, res) {
  let valor1, valor2, operacao

  valor1 = parseInt(req.query['fValor1'])
  valor2 = parseInt(req.query['fValor2'])
  operacao = parseInt(req.query['fOperacao'])

  // Faz uma pausa intencional
  sleep(10).then(() => {
    processaRequisicao(res, valor1, valor2, operacao)
  })
})

// Tratamento da requisição POST
// Exemplo com arrow function em vez de function convencional
app.post('/processa-calc', (req, res) => {
  let valor1, valor2, operacao

  valor1 = parseInt(req.body.fValor1)
  valor2 = parseInt(req.body.fValor2)
  operacao = parseInt(req.body.fOperacao)

  processaRequisicao(res, valor1, valor2, operacao)
})

function processaRequisicao(res, valor1, valor2, operacao) {
  let msgAlert = 'O resultado da operação foi: '
  let resultado = 0

  switch (operacao) {
    case 1:
      resultado = valor1 + valor2
      break
    case 2:
      resultado = valor1 - valor2
      break
    case 3:
      resultado = valor1 * valor2
      break
    case 4:
      if (valor2 == 0) {
        msgAlert = 'Impossível dividir por zero!'
        resultado = ''
      } else {
        resultado = valor1 / valor2
      }

      break
    default:
      resultado = 0
  }

  msgAlert += resultado
  let mensagem = `<h3><div class="alert alert-primary">${msgAlert}</div></h3>`

  HTML = `
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" 
            rel="stylesheet">
        <link rel="stylesheet" 
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css" 
            crossorigin="anonymous">

        <div class="container" style="margin-top: 0.5rem">
            ${mensagem}

            <button type="button" onclick="window.history.back()" class="btn btn-outline-danger">
                <i class="fas fa-door-open"></i>
                Voltar
            </button>
            &nbsp
            <button type="button" onclick="alert('${msgAlert}');" class="btn btn-primary">
                <i class="fab fa-js-square"></i></i>
                JavaScript
            </button>
        </div>
    `

  res.send(HTML)
}
