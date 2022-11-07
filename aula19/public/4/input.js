let cronometro
let arquivo = 'http://www.kasandbox.org/programming-sounds/rpg/giant-no.mp3'

let imagem =
  'https://images.pexels.com/photos/416160/pexels-photo-416160.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'

function iniciarCronometro() {
  let valor = document.getElementById('valor').value
  cronometro = setInterval(() => {
    if (valor == 0) {
      clearInterval(cronometro)
      let audio = document.createElement('audio')
      audio.src = arquivo
      audio.autoplay = 'true'
      audio.onended = function () {
        this.remove()
      }
      document.body.appendChild(audio)
      setImg()
    } else {
      valor--
    }
    document.getElementById('resultTimer').innerHTML = valor
  }, 1000)
}

function pausarCronometro() {
  clearInterval(cronometro)
}

function reiniciarCronometro() {
  valor = document.getElementById('valor').value
  document.getElementById('resultTimer').innerHTML = valor
  clearInterval(cronometro)
}

function criaImagem() {
  const img = document.createElement('img')
  img.src = imagem
  return img
}

function setImg() {
  const msg = document.querySelector('#img')
  const img = criaImagem()
  img.innerHTML = img
  msg.appendChild(img)
  pisca = setInterval(() => {
    img.remove()
  }, 1000)
}
