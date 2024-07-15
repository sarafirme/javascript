export default function ProductCard (props) {
    return `
        <div class="card">
            <img src="img/${props.img}.jpeg">
            <div>
                <h1>${props.name}</h1>
                <h2>${props.storage ? props.storage : '' } ${props.color ? props.color : ''}</h2>
                <span>${props.price}</span>
                <button>Comprar</button>
            </div>
        </div>
    `;
}
// props (propriedades)