const url = "https://rainydays.hollundplants.com//wp-json/wc/store/products";
const productContainer = document.querySelector(".product-container");

async function getProducts() {
    try {
        const response = await fetch(url);

        const results = await response.json();


        for(let i = 0; i < results.length; i++) {

            if (i === 4) {
                break;
            }

            productContainer.innerHTML += `<div class="product-card">
                                                <img src="${results[i].images[0].src}" alt="${results[i].name}" class="product-img">
                                                <h4>${results[i].name}</h4>
                                                <h4>${results[i].prices.price} GBP</h5>
                                                <a href="details.html?id=${results[i].id}"><button class="product-button">View Product</button></a>
                                            </div>`;
        }
    
    } catch (error) {
        console.log(error);
    }
}

getProducts();