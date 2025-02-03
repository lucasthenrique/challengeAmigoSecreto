let listaDeAmigos = [];

function adicionarAmigo() {
    let nome = document.querySelector('input').value;

    if (listaDeAmigos.includes(nome)) {
        alert('Esse nome já está na lista de amigos!')
    } else {
    listaDeAmigos.push(nome);
    limparCampo();
    }
    
}

function sortearAmigo() {
    
if (listaDeAmigos.length == 0) {
    alert('A lista está vazia!');
    return;
}
    let nomeSorteado = Math.floor(Math.random() * listaDeAmigos.length);
    alert(listaDeAmigos[nomeSorteado]);
;}

function limparCampo() {
    nome = document.querySelector('input');
    nome.value = '';
}
