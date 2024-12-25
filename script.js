import {data} from "./data.js";

const products = document.querySelector(".products");

// Generate HTML for each product   
data.forEach((item)=>{
   
    
    // Add product details
    products.innerHTML += `
       <div class="product">
        <img src=${item.image.desktop} alt="Dessert 1" />
    
        <h5>${item.category}</h5>
        <h3>${item.name}</h3>
        <p>$${item.price}</p>
        <button><img src="/assets/images/icon-add-to-cart.svg" alt=""> Add to Cart</button>
      </div>
    `;
    
  
})