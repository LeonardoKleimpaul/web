let valor = 0
let cronometro

function testarSetTimeout() {
  setTimeout(() => {
    document.getElementById('timeOut').innerHTML = '*** BUMMM !!! ***'
  }, 3000)
}

function iniciarCronometro() {
  cronometro = setInterval(() => {
    valor++
    document.getElementById('interval').innerHTML = valor
  }, 1000)
}

function pausarCronometro() {
  clearInterval(cronometro)
}

function reiniciarCronometro() {
  valor = 0
  document.getElementById('interval').innerHTML = valor
  clearInterval(cronometro)
}
