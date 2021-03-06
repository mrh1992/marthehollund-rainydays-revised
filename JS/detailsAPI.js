const detailContainer = document.querySelector(".productinfo-container");
const breadcrumb = document.querySelector(".breadcrumbs");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

const url = "https://rainydays.hollundplants.com/wp-json/wc/store/products/" + id;

async function fetchProduct() {

    try {
        const response = await fetch(url);
        const details = await response.json();


        detailContainer.innerHTML = `<img src="${details.images[0].src}" alt="${details.name}" class="productimg-container">
        <div class="modal-container">
        <span class="close">&times;</span>
        <img class="modal-image">
        <div class="productname">${details.name}</div>
        </div>
        <div class="productdetails-container">  
            <h2>${details.name}</h2>
            <h4>${details.prices.price} GBP</h4>
            <form>
                <select>
                    <option value="Select Size">Select Size</option>
                    <option value="X-Small">X-Small</option>
                    <option value="Small">Small</option>
                    <option value="Medium">Medium</option>
                    <option value="Large">Large</option>
                    <option value="X-Large">X-Large</option>
                </select>
                <input type="number" value="1" />
            </form>
            <h4>Description</h4>
            <p>${details.short_description}</p>
            <p>${details.description}</p>
            <a href="#add-popup"><button class="add-btn">Add to cart</button></a>
            

            <div id="add-popup" class="overlay">
                <div class="popup">
                    <h5>Item Added To Shoppingbag</h5>
                    <a class="close" href="#">&times;</a>
                <div class="content">
                    <a href="shoppingbag.html"><button class="checkout-btn">To Checkout</button></a>
                </div>
                </div>
            </div>
        </div>`;

       breadcrumb.innerHTML = `<li><a href="index.html">Home</a></li>
                                <li><a href="men.html">Jackets</a></li>
                                <li>${details.name}`;

       //Modal Image

        const modal = document.querySelector(".modal-container");
        const img = document.querySelector(".productimg-container");
        const modalImage = document.querySelector(".modal-image");
        const productName = document.querySelector(".productname");

        img.onclick = function() {
            modal.style.display = "block";
            modalImage.src = this.src;
        };

        modal.onclick = function() {
            modal.style.display = "none";
        }


    }
    catch(error) {
        console.log();
    }
}

fetchProduct();

