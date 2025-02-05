const myitem = new URLSearchParams(window.location.search).get("id");

let productContainer = document.querySelector(".productContainer");
let productId = myitem;

fetch(`https://kea-alt-del.dk/t7/api/products/${productId}`)
  .then((response) => response.json())
  .then((data) => {
    productContainer.innerHTML = `
      <figure>
        <img 
          src="https://kea-alt-del.dk/t7/images/webp/640/${productId}.webp" 
          alt="product image" 
          class="productImage" 
        />
      </figure>
      <section class="productDetails">
        <h2 class="productName">${data.productdisplayname}</h2>
        <div>
          <p class="articleType"><span class="bold">Type:</span> ${data.usagetype}</p>
          <p class="productCategory"><span class="bold">Kategori:</span> ${data.category}</p>
          <p class="productPrice"><span class="bold">Pris:</span> ${data.price},-</p>
        </div>
        <button class="buyButton">Køb nu</button>
      </section>
    `;
  });