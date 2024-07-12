const url = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados/CE/distritos'


async function fetchEstados(){
    const response = await fetch(url)
    const data = await response.json()

    let tagUl =  document.getElementById('lista-estados');

    for(let i = 0; i < data.length; i++){

        tagUl.innerHTML += `<li>Cidades: ${data[i].nome}</li> <br>`

    }

}

fetchEstados()