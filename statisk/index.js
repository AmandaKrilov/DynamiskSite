const categories = document.querySelector(".categories");

fetch(`https://kea-alt-del.dk/t7/api/categories/`)
  .then((response) => response.json())
  .then((data) => {
    console.log(data); // Debugging: Se om data hentes korrekt
    showCategories(data);
  });

function showCategories(data) {
  const markup = data
    .map(
      (element) => `
      <p>
        <a href="productlist.html?category=${element.category}">${element.category}</a>
      </p>
    `
    )
    .join("");

  categories.innerHTML = markup;
}