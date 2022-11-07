const form = document.querySelector('#formulario')

form.addEventListener('submit', function (e) {
  e.preventDefault()

  let texto = e.target.querySelector('#texto').value

  tela(texto)
})

function tela(texto) {
  console.log(`A menssagem é ${texto}`)
}
