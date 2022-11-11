const fulano = {
  nome: 'Fulano',
  sobrenome: 'da Silva',
  idade: 42,
  hobbies: ['cantar', 'dançar', 'ouvir música'],
  nomeCompleto() {
    return this.nome + ' ' + this.sobrenome
  },
  listarHobbies() {
    //for(let hobby of this.hobbies) {
    //  process.stdout.write(hobby + ' ')
    //}

    //let _this = this
    //this.hobbies.forEach(
    //  function (hobby) {
    //    console.log(_this.nome + ' gosta de ' + hobby)
    //  }.bind(this)
    //)

    this.hobbies.forEach(hobby => {
      console.log(this.nome + ' gosta de ' + hobby)
    })
  }
}

//console.log(fulano)
//console.log(fulano)
//console.log('Nome: ', fulano.nome)
//console.log(fulano.nomeCompleto())
//console.table(fulano.hobbies)
fulano.listarHobbies()
