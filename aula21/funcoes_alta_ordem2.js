const criarAdicao = function(base) {
  return function(numero) {
    return base + numero
  }
}

const somador = criarAdicao(41)