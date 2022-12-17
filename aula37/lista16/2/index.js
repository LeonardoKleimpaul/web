const novaBusca = document.querySelector('#form')
const chave = '13b1133f06c97e924e08be416e9e9352'

novaBusca.addEventListener('submit', e => {
  e.preventDefault()

  const input = document.querySelector('#input')
  const cidade = input.value
  console.log(cidade)

  getTempoAA()

  async function getTempoAA() {
    const resposta = await fetch(montaURL())
    const dados = await resposta.json()
    insereConteudo('Async/Await', dados)
  }

  function montaURL() {
    return `http://api.openweathermap.org/data/2.5/weather?q=${cidade},br&units=metric&lang=pt&APPID=${chave}`
  }

  console.log(montaURL)

  function insereConteudo(metodo, resposta) {
    console.log('Método:', metodo, resposta)

    $('#areaConteudo').empty()
    $('#areaConteudo').append('<hr>')
    $('#areaConteudo').append(`<h5>Método: ${metodo}</h5>`)
    $('#areaConteudo').append(
      '<p><strong>Cidade</strong>: ' +
        resposta.name +
        '<br><strong>Latitude</strong>: ' +
        resposta.coord.lat +
        ' <strong>Longitude</strong>: ' +
        resposta.coord.lon +
        '<br><strong>Descrição</strong>: ' +
        resposta.weather[0].description +
        '<br><strong>Temperatura</strong>: ' +
        resposta.main.temp.toLocaleString('pt-BR') +
        ' °C' +
        '<br><strong>Sensação térmica</strong>: ' +
        resposta.main.feels_like.toLocaleString('pt-BR') +
        ' °C' +
        '</p>'
    )

    // console.log($("#areaConteudo").html());
  }
})

//function getTempoXHR() {
//  let ajax = new XMLHttpRequest()

//  ajax.onload = event => {
//    if (ajax.status == 200) {
//      const resposta = JSON.parse(ajax.responseText)
//      insereConteudo('XMLHttpRequest', resposta)
//    } else if (ajax.status >= 40) {
//      console.log('Erro:', ajax.status, ajax.statusText)
//    }
//  }

//  ajax.open('GET', montaURL())
//  ajax.send()
//}

//function getTempoJQuery() {
// $.ajax({
//     url: montaURL(),
//     success: resposta => insereConteudo('jQuery', resposta),
//     error: () => console.log('Recurso não disponível - 404 not found')
// });

//  $.get({
//    url: montaURL(),
//    success: resposta => insereConteudo('jQuery', resposta),
//    error: () => console.log('Recurso não disponível - 404 not found'),
//  })
//}

//function getTempoFetch() {
//  fetch(montaURL())
//    .then(response => response.json())
//    .then(dados => insereConteudo('API Fetch', dados))
//    .catch(error => console.log('Recurso não disponível - 404 not found'))
//}

//async function getTempoAxios() {
//  const resposta = await axios(montaURL())
//  insereConteudo('Axios', resposta.data)
//}
