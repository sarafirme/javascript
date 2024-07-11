import listaDeEstados from './estados.js';
let tagUl = document.getElementById('lista-estados')

// tagUl.textContent = 'Conteúdo de texto' // Rederiza tudo com texto puro
// tagUl.innerHTML = '<li>Estado: Acre, Região: Norte</li>' // Rederiza tag HTML



for(let i = 0; i < listaDeEstados.length; i++){
    let estados = listaDeEstados[i]
    tagUl.innerHTML = tagUl.innerHTML + '<li>Estado: ' + estados.nome + '<br> Região: ' + estados.regiao.nome + '</li> <br>'
}

// let estados = listaDeEstados[17]
// tagUl.innerHTML = '<li>Estado: ' + estados.nome + ', Região: ' + estados.regiao.nome + '</li>';



console.log(listaDeEstados)