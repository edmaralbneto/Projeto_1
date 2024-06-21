function mostrarDataHora(){
    const date = new Date();

    console.log (date.toLocaleString());

    document.getElementById('date').innerText = date.toLocaleString();
}
mostrarDataHora();

function alterarNomeParaMaiusculo(){
    const nome = document.getElementById('alteracao');
    nome.innerText = nome.innerText.toUpperCase();
}
alterarNomeParaMaiusculo();