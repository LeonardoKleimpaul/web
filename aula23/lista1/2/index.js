const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const address = document.getElementById('address')
const date = document.getElementById('date')
const salario = document.getElementById('salario')
const password = document.getElementById('password')
const passwordtwo = document.getElementById('passwordtwo')

form.addEventListener('submit', e => {
  e.preventDefault()

  checkInputs()
})

function checkInputs() {
  const usernameValue = username.value.trim()
  const emailValue = email.value.trim()
  const addressValue = address.value.trim()
  const dateValue = date.value.trim()
  const salarioValue = salario.value.trim()
  const passwordValue = password.value.trim()
  const passwordtwoValue = passwordtwo.value.trim()

  // teste
  objetoLiteral(
    usernameValue,
    emailValue,
    addressValue,
    dateValue,
    salarioValue,
    passwordValue
  )

  if (usernameValue === '') {
    // mostrar o erro
    errorValidation(username, 'Preencha esse campo')
    // adicionar a classe erro
  } else {
    // adicionar a classe sucesso
    successValidation(username)
  }

  if (emailValue === '') {
    errorValidation(email, 'Preencha esse campo')
  } else {
    successValidation(email)
  }

  if (addressValue === '') {
    errorValidation(address, 'Preencha esse campo')
  } else {
    successValidation(address)
  }

  if (dateValue === '') {
    errorValidation(date, 'Preencha esse campo')
  } else {
    successValidation(date)
  }

  if (salarioValue === '') {
    errorValidation(salario, 'Preencha esse campo')
  } else {
    successValidation(salario)
  }

  if (passwordValue === '') {
    errorValidation(password, 'Preencha esse campo')
  } else if (passwordValue.length < 8) {
    errorValidation(password, 'A senha deve ter mais de 8 caracteres')
  } else {
    successValidation(password)
  }

  if (passwordtwoValue === '') {
    errorValidation(passwordtwo, 'Preencha esse campo')
  } else if (passwordValue !== passwordtwoValue) {
    errorValidation(passwordtwo, 'As senhas devem ser iguais')
  } else {
    successValidation(passwordtwo)
  }
}

function errorValidation(input, message) {
  const formControl = input.parentElement
  const small = formControl.querySelector('small')

  small.innerText = message

  formControl.className = 'form-control error'
}

function successValidation(input) {
  const formControl = input.parentElement

  formControl.className = 'form-control success'
}

function objetoLiteral(username, email, address, date, salario, password) {
  const fulano = {
    nome: username,
    email: email,
    endereco: address,
    data: date,
    salario: salario,
    senha: password
  }

  console.table(fulano)
}
