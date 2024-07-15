import ProductCard from "./components/ProductCards.js";

let productList = document.getElementById('product-card');

let products = [
    {
        name: "Iphone 14",
        price: "R$ 400,00",
        color: "Midnight",
        storage: "256GB",
        img: 'produc-image-5'
    },
    {
        name: "Nokia",
        price: "R$ 450,00"
    },
    {
        name: "Motorola",
        price: "R$ 50,00"
    }
];

for(let index = 0; index < products.length; index++) {

    productList.innerHTML += ProductCard(products[index]);

}