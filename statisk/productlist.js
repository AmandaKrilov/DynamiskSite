const mycategory = new URLSearchParams(window.location.search).get("category");

const productContainer = document.querySelector(".productContainer");

fetch(`https://kea-alt-del.dk/t7/api/products?category=${mycategory}`)
    .then((response) => response.json())
    .then(showProductLst);

function showProductLst(data) {
  const markup = data.map(
    (product) => `
      <article class="smallproduct">
        <div id="instock">
          <a href="product.html?id=${product.id}">
            <img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="${product.productdisplayname}" />
          </a>
        </div>
        <h2>${product.productdisplayname}</h2>
        <h3>${product.price} kr</h3>
      </article>
    `
  ).join(""); 
    productContainer.innerHTML = markup;
}