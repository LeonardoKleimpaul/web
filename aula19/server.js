const express = require('express')

const app = express()
const porta = 8080

// Instancia o servidor
app.listen(porta, () => console.log(`Servidor iniciado na porta: ${porta}`))

// Responde a requisição no endereço http://localhost:8080/
app.get('/', (request, response) => {
  response.status(200).send('<h2>Exemplo de servidor node.js</h2>')
})

function dormir(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

// Tratamento da requisição GET
app.get('/processa', function (req, res) {
  let texto

  texto = req.query['texto'].split('').reverse().join('')

  dormir(10).then(() => {
    processaRequisicao(res, texto)
  })
})

// Tratamento da requisição POST
// Exemplo com arrow function em vez de function convencional
/*app.post('/processa-calc', (req, res) => {
    let valor1, valor2, operacao;

    valor1 = parseInt(req.body.fValor1);
    valor2 = parseInt(req.body.fValor2);
    operacao = parseInt(req.body.fOperacao);

    processaRequisicao(res, valor1, valor2, operacao);
});*/

function processaRequisicao(res, texto) {
  let mensagem = texto

  HTML = `
    <link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css"
     rel="stylesheet"
    integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi"
    crossorigin="anonymous"
    />

        
        <h3><div class="alert alert-primary"><p style="text-align:center;">${mensagem}</p></div></h3> 
        
    `

  res.send(HTML)
}
