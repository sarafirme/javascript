import listaDeEstados from './estados.js';
let tagUl = document.getElementById('lista-estados')

let estados = listaDeEstados[i];
tagUl.innerHTML = tagUl.innerHTML + "<li id='item-0'>Estado: "  + estados.nome + '<br> Região: ' + estados.regiao.nome + '</li> <br>'


for(let i = 0; i < listaDeEstados.length; i++){
     let estados = listaDeEstados[i]
     tagUl.innerHTML = tagUl.innerHTML + "<li id='item-"+index+"'>Estado: " + estados.nome + '<br> Região: ' + estados.regiao.nome + '</li> <br>'
 }
 for(let i = 0; i < listaDeEstados.length; i++){
    let tagLi = document.getElementById("item-" + index);
    

 }





//Conceitos:
// tagUl.textContent = 'Conteúdo de texto' // Rederiza tudo com texto puro
// tagUl.innerHTML = '<li>Estado: Acre, Região: Norte</li>' // Rederiza tag HTML



//Exemplo3
// let estados = listaDeEstados[0];
// tagUl.innerHTML = tagUl.innerHTML + "<li id='item-0'>Estado: "  + estados.nome + '<br> Região: ' + estados.regiao.nome + '</li> <br>'



// let tagLi = document.getElementById('item-0');

// tagLi.addEventListener('click', function(){
//     alert('Clicou na LI');
// });


//Exemplo2
// for(let i = 0; i < listaDeEstados.length; i++){
//     let estados = listaDeEstados[i]
//     tagUl.innerHTML = tagUl.innerHTML + '<li>Estado: ' + estados.nome + '<br> Região: ' + estados.regiao.nome + '</li> <br>'
// }

//Exemplo1
// let estados = listaDeEstados[17]
// tagUl.innerHTML = '<li>Estado: ' + estados.nome + ', Região: ' + estados.regiao.nome + '</li>';



// console.log(listaDeEstados)