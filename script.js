//Mask
$('#inputCep').mask('00000-000');

let clientes = [
{
    id: 1,
    nomeCompleto: 'José Silva',
    cep: '18055-180',
    logradouro: 'Alameda das Crisandálias',
    numero: '160',
    bairro: 'Jardim Simus',
    cidade: 'Sorocaba',
    estado: 'SP'
},
{
    id: 2,
    nomeCompleto: 'Maria Teixeira',
    cep: '18055-180',
    logradouro: 'Alameda das Crisandálias',
    numero: '190',
    bairro: 'Jardim Simus',
    cidade: 'Sorocaba',
    estado: 'SP'
}

];
//Carregar clientes já cadastrados
carregarClientes(clientes);

//Pesqusar endereco com base no CEP
function pesquisarCEP() {
    let infosCep = pegarUrlCEP();
    let numeroCep = pegarNumeroCep();

    verificarValidadeCEP(numeroCep) ? '' : bloquearInputs();
    inserirDadosCep(infosCep);
}

function inserirDadosCep(url) {
    $.getJSON(url, (dados) => {
        if(verificarExistenciaCEP(dados)) {
            preencherEndereco(dados);
            liberarInputs();
        }
        else {
            bloquearInputs();
            return;
        }
    })  
}

function pegarUrlCEP() {
    numeroCep = pegarNumeroCep();
    let url = `https:///viacep.com.br/ws/${numeroCep}/json`;
    return url;
}

function pegarNumeroCep() {
    let cepInput = $('#inputCep').val();
    let numCep = (textCep) => textCep.replace(/-/g, '');
    return numCep(cepInput);
}

function liberarInputs() {
    $("#inputNumero").prop("disabled", false);
}

function bloquearInputs() {
    $("#inputNumero").prop("disabled", true);
}

function preencherEndereco(dados) {
    document.getElementById('inputEndereco').value = dados.logradouro;
    document.getElementById('inputBairro').value = dados.bairro;
    document.getElementById('inputCidade').value = dados.localidade;
    document.getElementById('inputEstado').value = dados.estado;
    document.getElementById('erroCep').innerHTML = '';
}

function verificarValidadeCEP(cep) {
    if(cep && cep.length != 8){
        document.getElementById('erroCep').innerHTML = 'CEP inválido';
        $('#localizacao input').val('');
        return false;
    }
    else if(!cep){
        document.getElementById('erroCep').innerHTML = '';
        $('#localizacao input').val('');
        return false;
    }
    else
        return true;
}

function verificarExistenciaCEP(dadosCEP) {
    if(('erro' in dadosCEP)){
        document.getElementById('erroCep').innerHTML = 'CEP não encontrado';
        $('#localizacao input').val('');
        return false;
    }
    else
        return true;
}

//Salvar cliente
function salvar() {
    if
    (   document.getElementById('inputEndereco').value.trim() != '' &&
        document.getElementById('inputNumero').value.trim() != '' &&
        document.getElementById('inputBairro').value.trim() != '' &&
        document.getElementById('inputCidade').value.trim() != '' &&
        document.getElementById('inputEstado').value.trim() != ''
    )
    {
        novoCliente = pegarInfosCliente();

        addNovaLinha(novoCliente)
        clientes.push(novoCliente);
        document.getElementById('formClientes').reset();
    } 
    bloquearInputs();
   
}

function carregarClientes(listaClientes) {
    for(let cliente of listaClientes) {
        addNovaLinha(cliente);
    }
}

function pegarInfosCliente() {
    const clienteInfos = 
    {   
        id: clientes.length + 1,
        nomeCompleto: $('#inputNome').val() + ' ' + $('#inputSobrenome').val(),
        cep: $('#inputCep').val(),
        logradouro: $('#inputEndereco').val(),
        numero: $('#inputNumero').val(),
        bairro: $('#inputBairro').val(),
        cidade: $('#inputCidade').val(),
        estado: $('#inputEstado').val(),
    }

    return clienteInfos;
}

function addNovaLinha(cliente) {
    let table = document.getElementById('tabelaClientes');
    let newRow = table.insertRow();

    //inserir id
    idNode = document.createTextNode(cliente.id);
    newRow.insertCell().appendChild(idNode);

    //inserir nome
    nomeNode = document.createTextNode(cliente.nomeCompleto);
    newRow.insertCell().appendChild(nomeNode);

    //inserir endereco
    logradouro = cliente.logradouro;
    numero = cliente.numero;
    enderecoNode = document.createTextNode(logradouro + ', ' + numero);
    newRow.insertCell().appendChild(enderecoNode);
    //inserir cep
    cepNode = document.createTextNode(cliente.cep);
    newRow.insertCell().appendChild(cepNode);

    //inserir bairro
    bairroNode = document.createTextNode(cliente.bairro);
    newRow.insertCell().appendChild(bairroNode);

    //inserir cidade
    cidadeNode = document.createTextNode(cliente.cidade);
    newRow.insertCell().appendChild(cidadeNode);

    //inserir estado
    estadoNode = document.createTextNode(cliente.estado);
    newRow.insertCell().appendChild(estadoNode);
}