// const url = 'https://randomuser.me/api/?results=10'

// async function fetchEstados(){
//     const response = await fetch(url)
//     const data = await response.json()

//     let tagUl =  document.getElementById('clientes');

//     for(let i = 0; i < 10; i++){

//         tagUl.innerHTML += '<div class="card" style="width: 18rem;"> <img src="..." class="card-img-top" alt="..."> <div class="card-body"> <h5 class="card-title">Card title</h5> <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> <a href="#" class="btn btn-primary">Go somewhere</a> </div> </div>'

//     }

// }

// fetchEstados()

let tagUl =  document.getElementById('clientes');

    for(let i = 0; i < 4; i++){

        tagUl.innerHTML += '<div class="card" style="width: 18rem;"> <img src="..." class="card-img-top" alt="..."> <div class="card-body"> <h5 class="card-title">Card title</h5> <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card"s content.</p> <a href="#" class="btn btn-primary">Go somewhere</a> </div> </div>'
    }