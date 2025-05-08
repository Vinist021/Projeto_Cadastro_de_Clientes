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

carregarClientes(clientes);

function pesquisarCEP() {
    let cep = $('#inputCep').val();
    let numCep = (cep) => cep.replace(/-/g, '');
    let url = `https:///viacep.com.br/ws/${numCep(cep)}/json`

    if(numCep(cep).length != 8){
        document.getElementById('erroCep').innerHTML = 'CEP inválido';
            $('#localizacao input').val('');
        exit(0);
    }
    console.log(numCep(url));
    inserirDadosCep(url);
    
}

function inserirDadosCep(url) {
    $.getJSON(url, (dados) => {
        if(('erro' in dados)){
            document.getElementById('erroCep').innerHTML = 'CEP não encontrado';
            $('#localizacao input').val('');
            exit(1);
        }
        
        document.getElementById('inputEndereco').value = dados.logradouro;
        document.getElementById('inputBairro').value = dados.bairro;
        document.getElementById('inputCidade').value = dados.localidade;
        document.getElementById('inputEstado').value = dados.estado;
        document.getElementById('erroCep').innerHTML = '';
    })  
}

function salvar() {
    novoCliente = pegarInfosCliente();

    addNovaLinha(novoCliente)
    clientes.push(novoCliente);
    document.getElementById('formClientes').reset();
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