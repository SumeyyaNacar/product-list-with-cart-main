import {data} from "./data.js";

const products = document.querySelector(".products");
const cart = document.querySelector(".cart");
const cartTitle = cart.querySelector("h2");
const cartContent = cart.querySelector("p");
const cartImage = cart.querySelector("img");
let cartItems = [];
let totalPrice = 0;

// Generate HTML for each product
data.forEach((item) => {
  products.innerHTML += `
    <div class="product">
      <img src=${item.image.desktop} alt="Dessert" />
      <h5>${item.category}</h5>
      <h3>${item.name}</h3>
      <p>$${item.price}</p>
      <button><img src="/assets/images/icon-add-to-cart.svg" alt=""> Add to Cart</button>
    </div>
  `;
});

// Add event listener for the "Add to Cart" button
const addToCartBtns = document.querySelectorAll(".product button");

addToCartBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const productElement = e.target.parentElement;
    const productName = productElement.querySelector("h3").textContent;
    const productPrice = parseFloat(productElement.querySelector("p").textContent.slice(1));

    // Add product to cart array
    cartItems.unshift({ name: productName, price: productPrice });

    // Update total price
    totalPrice += productPrice;

    // Update cart UI
    updateCartUI();
  });
});

let quantity = 0;
function updateCartUI() {
  // Clear cart content
  cartContent.innerHTML = "";

  // Update cart title and image visibility
  cartTitle.textContent = `Your Cart(${cartItems.length})`;
  cartImage.style.display = cartItems.length === 0 ? "block" : "none";

  

  // Add each cart item to the list
  cartItems.forEach((item) => {

    if( item.name.match(/\d+/)){
      quantity +=1;
    }
    cartContent.innerHTML += `

    <ul style="border-bottom: 1px solid var(--rose-100);  text-align: start; padding-left:20px;">
    <li style ="list-style:none;">
    <h4 style="color:var(--rose-900)">${item.name}</h4>
    <p style="color:var(--rose-500); font-size:16px;"><span style="color:var(--red); margin-right:5px;">${quantity}x</span>$${item.price.toFixed(2)}</p>
    </li>
    </ul>      
    `;
  });

  // Add total price to the cart
  cartContent.innerHTML += `<strong>Total: $${totalPrice.toFixed(2)}</strong>`;
}