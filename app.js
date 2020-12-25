const $product = document.querySelector(".product");
const $container = document.querySelector(".container");

function Fetching (url, place){
    fetch(url)
    .then(res=> res.json())
    .then((jso)=>{
        jso.products.forEach(element => {
            const product = `
                <article class="product ${element.id}">
                    <img src="${element.imgsrc}" alt="Product image" class="product__img">
                    <h2 class="product__title">${element.title}</h2>
                    <h3 class="product__price">${element.price}</h3>
                <button class="product__button">Add To Card</button>
             </article>`
            place.innerHTML += product
        });
    })
}
Fetching("./products.json",$container)