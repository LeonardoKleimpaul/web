let idForm, descrForm, qtdForm, vlrForm
const sURL = 'http://localhost:8081/api/produtos'

window.onload = function (e) {
  idForm = document.querySelector('#iId')
  descrForm = document.querySelector('#iDescricao')
  qtdForm = document.querySelector('#iQuantidade')
  vlrForm = document.querySelector('#iValor')
}

async function incluirProduto() {
  const id = idForm.value
  const descricao = descrForm.value
  const quantidade = qtdForm.value
  const valor = vlrForm.value

  axios
    .post(sURL, { id, descricao, quantidade, valor })
    .then(res => {
      //alert(res.data.mensagem)
      console.log(res.data)
      setTimeout(() => (window.location.href = '/'), 100)
    })
    .catch(res => console.log(res.response.data))
}
