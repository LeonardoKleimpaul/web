console.log("Hello 'word'");
console.log('Quebra "linha"');
//comentário de uma linha 
console.log('Meu nome é Fran estudo Js às', 19, 'horas'); // posso concatenar valores

/* comentario de bloco */


let nome; //declarou a variável
nome = "Franciele";
console.log(nome);
//não posso começar variáveis com números
//usar variáveis significativas
//não pode conter espaços e traços
//de preferencia começa com letra minúscula nomeSobrenome
//Js é case sensitive
// Não utilize Var, utilize let

const sobrenome =  "Petry";
console.log(sobrenome);
//não posso começar constantes com números
//usar variáveis significativas
//não pode conter espaços e traços
//utilizamos camelcase
// Não utilize Var, utilize const

//const idade = 29;
const peso = 70;
const altura = 1.63; // constante não muda de valor
let indiceMassaCorporal; // variável muda de valor ao decorrer do tempo

indiceMassaCorporal = peso/(altura * altura)

console.log("IMC = ", indiceMassaCorporal)

//const idade = 16;
/*if (idade >= 16 && idade < 18) {
	console.log("voto facultativo");
} */
//const idade=25;
if (idade >= 16 && idade < 18) {
	console.log("voto facultativo");
}else{
	console.log("voto obrigatório");
}

const n1=10;
const n2=20;
if (n1 > n2) {
    console.log("n1 :", n1, "é maior que n2 :", n2);
} else if (n1 < n2) {
    console.log("n1 :", n1, "é menor que n2 :", n2);
} else {
    console.log("n1 :", n1, "é igual a n2 :", n2);
}

const idade = 29;
switch (idade) {
	case (29): 
    console.log("Você está no auge.");
	break;
	case (40) : 
    console.log("A vida começa aqui.");
	break;
	case (60) : 
    console.log("Iniciando a melhor idade.");
	break;
	default: 
		console.log("A vida merece ser vivida, não importa a idade.");
	break;
}

const autenticado = true;

switch (autenticado) {
    case true:
        console.log("Usuário logado");
        break;
    case false:
        console.log("Usuário não autenticado");
	default: 
		console.log("Entrada inválida");
	break;
}

const mes = "Maio";

switch (mes) {
    case "Janeiro":
    case "Fevereiro":
    case "Março":
        console.log("Verão!");
        break;
    case "Abril":
    case "Maio":
    case "Junho":
        console.log("Outono!");
        break;
    case "Julho":
    case "Agosto":
    case "Setembro":
        console.log("Inverno!");
        break;
    case "Outubro":
    case "Novembro":
    case "Dezembro":
        console.log("Primavera!");
}


const types = [ 'object', 'array', 'string', 'integer', 'float', 'boolean' ]

for (const type of types) {  
  console.log(`A JavaScript type is: ${type}`)
}

let names = [ 'Marcus', 'Norman', 'Christian' ]

for (const index in names) {  
  console.log(`${names[index]} está na posição ${index}`)
}

let numeros = [1, 2, 3, 4, 5];
	for (let i = 0; i < numeros.length; i++) {
			numeros[i] = numeros[i]* 2;
			console.log(numeros[i]);
	}




let numero = 1;
	while (numero <= 5) {
			console.log("O número atual é: " + numero);
			numero = numero + 1;
	 }

const numeroS = [ 10, 11, 22, 23, 34, 45, 66, 17, 28, 93, 101 ];

let indeX = 0;

while (indeX < numeroS.length) {
  console.log('numero atual %s: ', numeroS[indeX]);
  indeX++;
}

let number = 1;
	do {
			console.log("O número atual é: " + number);
			number = number + 1;
	} while (number <= 5) ;



	const alunos = [
		{ aluno: 'João', nota: 10},
		{ aluno: 'Ana', nota: 8},
		{ aluno: 'Fernando', nota: 9},
		{ aluno: 'Bia', nota: 10},
	  ];
	  
	  let index = 0;
	  let somaDasNotas = 0;
	  let totalAlunos = alunos.length;
	  
	  do {
		somaDasNotas += alunos[index].nota;
	  
		index++;
	  } while (index < totalAlunos);
	  
	  let media = somaDasNotas / totalAlunos;
	  
	  console.log(media);


function saudacao () {
    console.log("bom dia!")
}

saudacao();

/*O uso de crase(acento grave) indica que esta sendo declarado uma
 Template String, mas você pode declarar tanto com aspas,
  quanto aspas duplas ou o acento grave */

function saudacao (nome) {
    console.log(`bom dia ${nome}!`) // use crases 
    return 123456;
}

const variavel = saudacao("Fran");
console.log(variavel)

function soma(x,y){
    const resultado = x+y;
    return resultado;
}

const resultado = soma(1,10);
console.log(resultado);

