const sa = {
  nome: 'Senhor dos Anéis',
  escritor: 'J.R.R. Tolkien',
  diretor: 'Peter Jackson',
  hobbits: ['Merry', 'Pippin', 'Frodo', 'Sam', 'Bilbo'],
  magos: ['Gandalf', 'Radagast', 'Saruman'],

  listarHobbits() {
    this.hobbits.forEach(hobbit => {
      console.log(`O filme ${this.nome} tem um Hobbit chamado ${hobbit}`)
    })

    for (let mago of this.magos) {
      process.stdout.write(`O filme ${this.nome} tem um mago chamado ${mago} `)
    }
  }
}

sa.listarHobbits()
console.log(sa.magos)
