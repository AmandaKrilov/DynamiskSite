const mycategory = new URLSearchParams(window.location.search).get("category");

const productContainer = document.querySelector(".productContainer");

fetch(`https://kea-alt-del.dk/t7/api/products?category=${mycategory}`)
    .then((response) => response.json())
    .then(showProductLst);

function showProductLst(data) {
  const markup = data.map(
    (product) => `
      <article class="smallproduct ${product.discount && "onSale"} ${product.soldout && "soldOut"}">
        <div id="instock" class=pics>
          <a href="product.html?id=${product.id}">
            <img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="${product.productdisplayname}" />
          </a>
        </div>
        <span class="saleLable ${product.discount && "isOnSale"}">
        -${product.discount}%
        </span>
        <span class="soldOutLable ${product.soldout && "out"}"> Sold Out
        -${product.soldout}
        </span>
        <h2>${product.productdisplayname}</h2>
        <h3>${product.price} kr</h3>
        <div class=onSale> </div>
        <div class=soldOut> </div>

      </article>
    `
  ).join(""); 
    productContainer.innerHTML = markup;
}