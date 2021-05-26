const url = "https://rainydays.hollundplants.com//wp-json/wc/store/products";
const productContainer = document.querySelector(".product-container");

async function getProducts() {
    try{
        const response = await fetch(url);

        const getResults = await response.json();

        createHTML(getResults);
   
    } catch(error){
        console.log(error);
    }
}

getProducts();

function createHTML(products){
    products.forEach(function(product){
        productContainer.innerHTML += `<div class="product-card">
                                            <img src="${product.images[0].src}" alt="${product.name}" class="product-img">
                                            <h4>${product.name}</h4>
                                            <h4>${product.prices.price} GBP</h5>
                                            <a href="details.html?id=${product.id}">
                                                 <button class="product-button">View Product</button>
                                             </a>
                                            </div>`;
    })
}

