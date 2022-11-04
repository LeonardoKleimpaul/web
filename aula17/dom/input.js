window.onload = () => {
  let no = document.getElementById('no')
  
  no.addEventListener('click', function som(e) {
    e.preventDefault();
    tocarAudio()
  })
}


function tocarAudio() {
  let arquivo = 'http://www.kasandbox.org/programming-sounds/rpg/giant-no.mp3'

  let audio = document.createElement('audio')
  audio.src = arquivo
  audio.autoplay = 'true'
  audio.onended = function () {
    this.remove()
  }
  document.body.appendChild(audio);
}
