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

app.get('/processa', (req, res) => {
  let porcentagem, valor

  porcentagem = parseInt(req.query['fPorcentagem'])
  valor = parseInt(req.query['fValor'])

  sleep(10).then(() => {
    processaRequisicao(res, porcentagem, valor)
  })
})

function processaRequisicao(res, porcentagem, valor) {
  let msgError = ''
  let resultado = 0

  if (porcentagem > 100) {
    msgError = ' A porcentagem não pode ser maior do que 100.'
  } else if (porcentagem < 0) {
    msgError = ' A porcentagem não pode ser menor do que 0.'
  } else {
    resultado = (valor * porcentagem) / 100
  }

  let msg = `${porcentagem}% de ${valor} é: ${resultado}`

  HTML = `
    <link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css"
     rel="stylesheet"
    integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi"
    crossorigin="anonymous"
    />

        
        <h3><div class="alert alert-primary"><p style="text-align:center;">${msg}${msgError}</p></div></h3> 
        
    `

  res.send(HTML)
}
