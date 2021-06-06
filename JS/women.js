const url = "https://rainydays.hollundplants.com//wp-json/wc/store/products?category=16";
const productContainer = document.querySelector(".product-container");
const loadMore = document.querySelector(".loadMore");
const breadcrumb = document.querySelector(".breadcrumbs");

async function getProducts() {
    try{
        const response = await fetch(url);

        const results = await response.json();

        breadcrumb.innerHTML = "";
        productContainer.innerHTML = "";

        for (let i = 0; i < results.length; i++) {

            breadcrumb.innerHTML = `<li><a href="index.html">Home</a></li>
                                    <li>Women</li>`;

            productContainer.innerHTML += `<div class="product-card">
                                            <img src="${results[i].images[0].src}" alt="${results[i].name}" class="product-img">
                                            <h4>${results[i].name}</h4>
                                            <h4>${results[i].prices.price} GBP</h5>
                                            <a href="details.html?id=${results[i].id}">
                                                 <button class="product-button">View Product</button>
                                             </a>
                                            </div>`;
        loadMore.style.display = "block";
        }
   
    } catch(error){
        console.log(error);
    }
}

getProducts();

let defaultProducts = 6;

loadMore.addEventListener("click", (e) => {

    const moreProducts = document.querySelectorAll(".product-card");

    for (let i = defaultProducts; i < defaultProducts + 3; i++) {
        if (defaultProducts < moreProducts.length) {
            moreProducts[i].style.display = "block";
        }
    }

    defaultProducts += 3;

    if (defaultProducts >= moreProducts.length) {
loadMore.style.display = "none";
    }
})