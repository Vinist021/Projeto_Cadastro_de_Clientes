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

function salvar() {

    console.log(pegarInfosCliente());
}

function carregarClientes(listaClientes) {
    for(let cliente of listaClientes) {
        addNovaLinha(cliente);
    }
}

function pegarInfosCliente() {
    const clientInfos = 
    {   
        id: clientes.length + 1,
        nomeCompleto: $('#inputNome').val() + ' ' + $('#inputSobrenome').val(),
        CEP: $('#inputCep').val(),
        logradouro: $('#inputEndereco').val(),
        numero: $('#inputNumero').val(),
        bairro: $('#inputBairro').val(),
        cidade: $('#inputCidade').val(),
        estado: $('#inputEstado').val(),
    }

    return clientInfos;
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