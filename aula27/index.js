const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const porta = 8080

// Instancia o servidor
app.listen(porta, () => console.log(`Servidor iniciado na porta: ${porta}`))

// tratamento requisição POST
app.use(bodyParser.urlencoded({ extended: true }))

// Responde a requisição no endereço http://localhost:8080/
app.get('/', (request, response) => {
  response.status(200).send('<h2>Exemplo de servidor node.js</h2>')
})

// EXEMPLO 1 ---------------------------------------------------------------------------------------

// app.post('/processa', (req, res) => {

//   const emailCheck = 'leo@leo.com'
//   const passwordCheck = 12345678

//   let emailUser = req.body.email
//   let passwordUser = req.body.password

//   checkInputs(res, emailUser, passwordUser, emailCheck, passwordCheck)
// })

// function checkInputs(res, emailUser, passwordUser, emailCheck, passwordCheck) {

//     if (emailUser == emailCheck && passwordUser == passwordCheck) {
//         msg = 'Login Realizado com Sucesso!!'
//         html(res, msg)
//     } else {
//         msg = 'Email ou Senha Incorreta!!!'
//         html(res, msg)
//     }
// }
// -------------------------------------------------------------------------------------------------

// EXEMPLO 2 ---------------------------------------------------------------------------------------

// app.post('/processa', (req, res) => {
//   const emailCheck = [
//     'leo@leo.com',
//     'a@a.com',
//     'b@b.com',
//     'c@c.com',
//     'oi@oi.com'
//   ]
//   const passwordCheck = ['123', '456', '789', '321', '654']

//   let emailUser = req.body.email
//   let passwordUser = req.body.password

//   checkInputs(res, emailUser, passwordUser, emailCheck, passwordCheck)
// })

// function checkInputs(res, emailUser, passwordUser, emailCheck, passwordCheck) {
//   if (
//     emailCheck.indexOf(emailUser) >= 0 &&
//     emailCheck.indexOf(emailUser) == passwordCheck.indexOf(passwordUser)
//   ) {
//     msg = 'Login Realizado com Sucesso!!'
//     html(res, msg)
//   } else {
//     msg = 'Email ou Senha Incorreta!!!'
//     html(res, msg)
//   }
// }
// -------------------------------------------------------------------------------------------------

// EXEMPLO 3 ---------------------------------------------------------------------------------------
// app.post('/processa', (req, res) => {
//   const dados = {
//     usuarios: [
//       { emailCheck: 'leo@leo.com', passwordCheck: '123' },
//       { emailCheck: 'a@a.com', passwordCheck: '456' },
//       { emailCheck: 'b@b.com', passwordCheck: '789' },
//       { emailCheck: 'c@c.com', passwordCheck: '321' },
//       { emailCheck: 'oi@oi.com', passwordCheck: '654' }
//     ]
//   }

//   let emailUser = req.body.email
//   let passwordUser = req.body.password

//   checkInputs(res, emailUser, passwordUser, dados.usuarios)
// })

// function checkInputs(res, emailUser, passwordUser, usuarios) {
//   usuarios.forEach(user => {
//     if (user.emailCheck == emailUser && user.passwordCheck == passwordUser) {
//       msg = 'Login Realizado com Sucesso!!'
//       html(res, msg)
//     }
//   })
//     msg = 'Email ou Senha Incorreta!!!'
//     html(res, msg)
// }
// -------------------------------------------------------------------------------------------------

// EXEMPLO 4 ---------------------------------------------------------------------------------------

app.post('/processa', (req, res) => {
  class Usuario {
    constructor(emailCheck, passwordCheck) {
      this.emailCheck = emailCheck
      this.passwordCheck = passwordCheck
    }

    autentica(res, email, password, users) {
      let msg = ''

      users.forEach(user => {
        if (user.emailCheck == email && user.passwordCheck == password) {
          msg = 'Login Realizado com Sucesso!!'
          html(res, msg)
        }
      })
      msg = 'Email ou Senha Incorreta!!!'
      html(res, msg)
    }

    get emailCheck() {
      return this.emailCheck
    }

    // set emailCheck(value) {
    //   this.emailCheck = value
    // }

    // get passwordCheck() {
    //   return this.passwordCheck
    // }

    // set passwordCheck(value) {
    //   this.passwordCheck = value
    // }
  }

  const login1 = new Usuario('leo@leo.com', '123')
  const login2 = new Usuario('a@a.com', '456')
  const login3 = new Usuario('b@b.com', '789')
  const login4 = new Usuario('c@c.com', '321')
  const login5 = new Usuario('oi@oi.com', '654')

  const users = [login1, login2, login3, login4, login5]

  let emailUser = req.body.email
  let passwordUser = req.body.password

  for (let i = 0; i < users.length; i++) {
    users[1].autentica(res, emailUser, passwordUser, users)
  }

  //checkInputs(res, emailUser, passwordUser)
})

// -------------------------------------------------------------------------------------------------

function html(res, msg) {
  HTML = `<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css"rel="stylesheet">
     <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css" crossorigin="anonymous">
        
        <h3><div class="alert alert-primary" style="margin-top: 0.5rem; text-align:center;">${msg}</div></h3> 
       
        <button type="button" onclick="window.history.back()" class="btn btn-outline-danger">
        <i class="fas fa-door-open"></i>
        Voltar
        </button>
        &nbsp
       `
  res.send(HTML)
}
