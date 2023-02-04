let id, nomeForm, emailForm
const sURL = 'http://localhost:8081/api/usuarios/'

window.onload = async function (e) {
  const query = window.location.search
  const parametros = new URLSearchParams(query)
  id = parametros.get('id')

  nomeForm = document.querySelector('#iNome')
  emailForm = document.querySelector('#iEmail')

  const usuario = await buscarUsuario(id)
  preencherForm(usuario)
}

function preencherForm(usuario) {
  nomeForm.value = usuario.nome
  emailForm.value = usuario.email
}

async function buscarUsuario(id) {
  const resposta = await axios.get(sURL + id)

  return resposta.data
}

async function alterarUsuario() {
  const nome = nomeForm.value
  const email = emailForm.value

  axios
    .put(sURL + id, { nome, email })
    .then(res => {
      alert(res.data.mensagem)
      console.log(res.data.usuario)
      setTimeout(() => (window.location.href = '/front-end'), 100)
    })
    .catch(res => console.log(res.response.data))
}
