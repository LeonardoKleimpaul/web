let id, idForm, nomeForm, dependetesForm, salarioForm;
const sURL = 'http://localhost:8081/api/funcionarios/';

window.onload = async function (e) {
    const query = window.location.search;
    const parametros = new URLSearchParams(query);
    id = parametros.get('id');

    idForm = document.querySelector('#iID');
    nomeForm = document.querySelector('#iNome');
    dependentesForm = document.querySelector('#iNumeroDependentes');
    salarioForm = document.querySelector('#iSalario');

    const funcionario = await buscarFuncionario(id);
    preencherForm(funcionario);
};

function preencherForm(funcionario) {
    idForm.value = funcionario.id
    nomeForm.value = funcionario.nome
    dependentesForm.value = funcionario.dependentes
    salarioForm.value = funcionario.salario
  }

async function buscarFuncionario(id) {
    const resposta = await axios.get(sURL + id);

    return resposta.data;
}

async function alterarFuncionario() {
    const id = idForm.value;
    const nome = nomeForm.value; 
    const dependentes = dependentesForm.value;
    const salario = salarioForm.value;

    if(!id || !nome || !dependentes || !salario) {
        return alert("Preencha os campos obrigatórios.")
    }

    axios.put(sURL, { id, nome, dependentes, salario })
        .then(res => {
           // alert(JSON.stringify(res.data));
            console.log(res.data);
            setTimeout(() => window.location.href = '/', 100);
        })
        .catch(res => console.log(res.response.data));
}