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
  let temperatura

  temperatura = parseInt(req.query['fTemperatura'])

  sleep(10).then(() => {
    processaRequisicao(res, temperatura)
  })
})

function processaRequisicao(res, temperatura) {
  let resultado = 0

  resultado = (temperatura - 32) / 1.8

  let msg = `${temperatura} graus Fahrenheit são: ${resultado} graus Celsius`

  HTML = `
    <link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css"
     rel="stylesheet"
    integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi"
    crossorigin="anonymous"
    />

        
        <h3><div class="alert alert-primary"><p style="text-align:center;">${msg}</p></div></h3> 
        
    `

  res.send(HTML)
}
