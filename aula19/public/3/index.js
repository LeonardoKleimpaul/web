const form = document.querySelector('#formulario')

form.addEventListener('submit', function (e) {
  e.preventDefault()

  let texto = e.target.querySelector('#texto').value

  setTexto(texto)
})

function criaP(texto) {
  const p = document.createElement('p')
  return p
}

function setTexto(texto) {
  const msg = document.querySelector('#msg')

  const p = criaP()

  p.innerHTML = texto
  msg.appendChild(p)
}

function mudaCor() {
  document.getElementById('mudaCor').style.backgroundColor =
    document.getElementById('MyColorPicker').value
}
