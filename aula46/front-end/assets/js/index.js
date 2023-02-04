const FRONT = 'http://localhost:5500/'
const API = 'http://localhost:8081/api/produtos'

window.onload = function (e) {
  listarProdutos()
}

function criarTabela(produtos) {
  const corpoTabela = document.querySelector('#produtos')
  corpoTabela.innerHTML = ''

  if (produtos) {
    const linhas = produtos.map(produto => {
      const tdId = document.createElement('td')
      tdId.innerHTML = produto.id

      const tdDescricao = document.createElement('td')
      tdDescricao.innerHTML = produto.descricao

      const tdQuantidade = document.createElement('td')
      tdQuantidade.innerHTML = produto.quantidade

      const tdValor = document.createElement('td')
      tdValor.innerHTML = produto.valor.toLocaleString('pt-BR', {
        currency: 'BRL',
        style: 'currency',
      })

      const acaoAlterar = document.createElement('a')
      acaoAlterar.innerHTML = 'Alterar'
      acaoAlterar.setAttribute(
        'href',
        FRONT + 'alterar_produto.html?id=' + produto.id
      )
      acaoAlterar.classList.add('btn', 'btn-primary', 'me-2')

      const acaoExcluir = document.createElement('a')
      acaoExcluir.innerHTML = 'Excluir'
      acaoExcluir.classList.add('btn', 'btn-danger')

      acaoExcluir.addEventListener(
        'click',
        function (event) {
          if (confirm('Tem certeza que deseja excluir?')) {
            axios.delete(API + produto.id, {}).then(res => {
              //alert(res.data.mensagem)
              listarProdutos()
            })
          }
        },
        false
      )

      const tdAcoes = document.createElement('td')
      tdAcoes.appendChild(acaoAlterar)
      tdAcoes.appendChild(acaoExcluir)

      const tr = document.createElement('tr')
      tr.appendChild(tdId)
      tr.appendChild(tdDescricao)
      tr.appendChild(tdQuantidade)
      tr.appendChild(tdValor)
      tr.appendChild(tdAcoes)

      return tr
    })

    linhas.forEach(linha => corpoTabela.appendChild(linha))
  }
}

async function listarProdutos() {
  const res = await axios.get(API, {})

  console.log(res)
  criarTabela(res.data)
}
