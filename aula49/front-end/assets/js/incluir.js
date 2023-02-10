let idForm, nomeForm, dependentesForm, salarioForm;
const sURL = 'http://localhost:8081/api/funcionarios/';

window.onload = function (e) {
    idForm = document.querySelector('#iID');
    nomeForm = document.querySelector('#iNome');
    dependentesForm = document.querySelector('#iNumeroDependentes');
    salarioForm = document.querySelector('#iSalario');
};

async function incluirFuncionario() {
    const id = idForm.value;
    const nome = nomeForm.value; 
    const dependentes = dependentesForm.value;
    const salario = salarioForm.value;

    if(!id || !nome || !dependentes || !salario) {
        return alert("Preencha os campos obrigatórios.")
    }

    axios.post(sURL, { id, nome, dependentes, salario })
        .then(res => {
            res.data.toString = function() {
                return 'ID: ' + this.id + '\nNome: ' + this.nome +
                    '\nDependentes: ' + this.dependentes + '\nSalario: ' + this.salario;
                }

            alert(res.data.toString());
            console.log(res.data);
            setTimeout(() => window.location.href = '/', 100);
        })
        .catch(res => console.log(res.response.data));
}